import imaps from "imap-simple";
import AdmZip from "adm-zip";
import { Base64Decode } from "base64-stream";
import { Readable } from "stream";
import { Iconv } from "iconv";
import fs from "fs";
import { motexAdapter } from "../csv-adapters/motex.js";
import { lautoAdapter } from "../csv-adapters/l-auto.js";

const getMailAddress = (msg) => {
	const mailHeader = msg.parts.find((pt) => pt.which === "HEADER");
	return mailHeader.body["return-path"][0].replace(/<|>/gi, "");
};

const getForwardMailAddress = (msg) => {
	const mailFwd = msg.parts.find((pt) => pt.body.subject.filter(sub => sub.search("Fwd:") >=0 ? true : false));
	return mailFwd.body.subject[0].replace('Fwd: ', '');
}

const getMailAttachment = async (msg, connection) => {
	return new Promise(async (resolve) => {
		let parts = imaps
			.getParts(msg.attributes.struct);
			parts = parts.filter((part) => part?.disposition?.type.toUpperCase() === "ATTACHMENT");

		const zipBuffer = await connection.getPartData(
			msg,
			parts[parts.length - 1]
		);

		const stream = Readable.from(zipBuffer, { encoding: "base64" }).pipe(
			new Base64Decode()
		);

		let buffer = Buffer.alloc(0);

		stream.on("data", (chunk) => {
			buffer = Buffer.concat([buffer, chunk]);
		});

		stream.on("end", () => {
			const zipFile = new AdmZip(buffer);
			let body = zipFile.getEntries()[0].getData();
			const conv = Iconv("windows-1251", "utf8");
			body = conv.convert(body).toString();

			getForwardMailAddress(msg);

			if (getForwardMailAddress(msg).search("Motex") != -1) {
				const MOTEX_CSV_HEADER =
					"Бренд;Артикул;Цена клиента BYN;Количество;Наименование;Применимость;На складе\n";
				body = MOTEX_CSV_HEADER.concat(body);
			}

			fs.writeFileSync(`./tmp/${Date.now()}.csv`, body, { encoding: "utf8" });
			resolve(body);
		});
	});
};

export const getCSVFromMessage = async (connection) => {
	const messages = await connection.search(["UNSEEN"], {
		bodies: ["HEADER", "TEXT"],
		struct: true,
		markSeen: false,
	});

	if (!messages.length) return;

	let productRecords = [];

	const productList = messages.map((msg) => {
		return new Promise((resolve) => {
			const mailAddress = getForwardMailAddress(msg);
			console.log(`You got new messages from ${mailAddress}.`);

			const csv = getMailAttachment(msg, connection);

			if (mailAddress.search("Motex") != -1) {
				const products = motexAdapter([csv]);
				resolve(products);
			} else if (mailAddress.search("Л-авто") != -1) {
				const products = lautoAdapter([csv]);
				resolve(products);
			}

			console.log("Save to atachment to temporary folder.");
		});
	});

	const p = await Promise.all(productList);

	p.forEach((records) => productRecords.push(...records));

	return productRecords;
};
