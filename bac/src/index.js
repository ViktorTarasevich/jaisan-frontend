import express from "express";
import dotenv from "dotenv";
import imaps from "imap-simple";
import { getCSVFromMessage } from "./services/mail-service.js";
import { sequelize } from "./connections/sequelize.js";
import { Product } from "./models/Product.js";
import cors from "cors";
import compression from "compression";
import cartRouter from "./routes/cart.js";
import searchRouter from "./routes/search.js";
import productRouter from "./routes/products.js";
import { Cart } from "./models/Cart.js";
import { User } from "./models/User.js";
import orderRouter from "./routes/order.js";
// import productRouter from "./routes/products.js";

dotenv.config();

const app = express();

app.use(
	cors({
		origin: "*",
		optionSuccessStatus: 204,
		exposedHeaders: ["access", "refresh"],
	}),
	express.json(),
	compression()
);

app.use(cartRouter);
app.use(productRouter);
app.use(orderRouter);
app.use(searchRouter);

// app.get("/getAll", async (req, res) => {
// 	// ПОЛУЧАЮ АРТИКУЛ, потом делаю выборку из баз по этому артикулу ( то что совпало ) + делаю запрос к апи ( одновременно вызываю адаптеры, которые приводят все данные к одному виду)
// 	const products = await Product.findAll();
// 	res.status(200).json(products);
// });

app.get("/search", async (req, res) => {
	// ПОЛУЧАЮ АРТИКУЛ, потом делаю выборку из баз по этому артикулу ( то что совпало ) + делаю запрос к апи ( одновременно вызываю адаптеры, которые приводят все данные к одному виду)
	console.log('search')
	res.status(200).json();
});

function millisToMinutesAndSeconds(millis) {
	const minutes = Math.floor(millis / 60000);
	const seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

app.listen(process.env.PORT || 5000, async () => {
	console.log(`App listening on port ${process.env.PORT || 5000}.`);

	// await sequelize.authenticate();
	// await sequelize.sync({ force: true });

	// const connection = await imaps.connect({
	// 	imap: {
	// 		user: process.env.EMAIL,
	// 		password: process.env.PASSWORD,
	// 		host: process.env.HOST,
	// 		port: 993,
	// 		tls: true,
	// 		tlsOptions: { rejectUnauthorized: false },
	// 	},
	//
	// 	onmail: async () => {
	// 		const productRecords = await getCSVFromMessage(connection);
	//
	// 		const t0 = performance.now();
	//
	// 		// console.log(productRecords);
	//
	// 		await Product.bulkCreate(productRecords, {
	// 			updateOnDuplicate: [
	// 				"name",
	// 				"brand",
	// 				"in_stock",
	// 				"price",
	// 				"additional_info",
	// 			],
	// 		});
	//
	// 		const t1 = performance.now();
	//
	// 		console.log(
	// 			"Call Database update " +
	// 			millisToMinutesAndSeconds(t1 - t0) +
	// 			" mm::ss."
	// 		);
	// 	},
	// });
	//
	// console.log("Connecting to IMAP.");
	//
	// await connection.openBox("INBOX");

	console.log("Open 'INBOX'.");
});
