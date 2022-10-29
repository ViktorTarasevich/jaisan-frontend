import { axiosInstance } from "./axios-instance.js";
import { searchProductsByArticul } from "./requests.js";
import path from 'path'

const fn = async () => {
	// const products = await searchProductsByArticul("OC100");

	const res = await axiosInstance
		.post("/prices/search/with_article_info", {
			data: [{ articleId: 1248288, includeAnalogs: true }],
		}, {
			headers: {"Content-Type": "application/json"},
		})
		.catch((error) => {
			console.log("fn", error.response.status);
			console.log("fn", error.response.data);
		});
};

fn();
