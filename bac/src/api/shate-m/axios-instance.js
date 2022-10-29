import axios from "axios";
import qs from "node:querystring";
import dotenv from "dotenv";
import {
	interceptorsRequestBind,
	interceptorsResponseBind,
} from "../common/interceptors.js";
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), 'src/api/.env.api')});

let token = null;

export const axiosInstance = axios.create({
	baseURL: "https://api.shate-m.by/api/v1",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		accept: "text/plain",
	},
});

interceptorsRequestBind(axiosInstance, (config) => {
	if (token) {
		config.headers["Authorization"] = token;
	}
	// console.log(config);
	return config;
});

interceptorsResponseBind(axiosInstance, async (originalRequest, error) => {
	const res = await axiosInstance.post(
		"/auth/loginbyapikey",
		qs.stringify({ ApiKey: process.env.API_KEY })
	).catch(e => {
	});

	// console.log("loginbyapikey:", res.status);

	if (res.status === 201 || res.status === 200 || res.status === 204) {
		originalRequest._retry = true;


		token = `${res.data.token_type} ${res.data.access_token}`;

		return axiosInstance(originalRequest);
	}
});
