import csv from "csv-parser";
import { Readable } from "stream";
import { schemaAssembler } from "./csv-adapter.js";

export const motexAdapter = async (buffer) => {
	const products = [];
	return new Promise((resolve) => {
		const readable = Readable.from(buffer);
		readable
			.pipe(csv({ separator: ";" }))
			.on("data", (data) => products.push(schemaAssembler(data, "Motex")))
			.on("end", () => {
				resolve([
					...new Map(products.map((item) => [item["articul"], item])).values(),
				]);
			});
	});
};
