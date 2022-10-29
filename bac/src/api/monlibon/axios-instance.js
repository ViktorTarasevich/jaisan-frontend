import axios from "axios";
import {
	interceptorsRequestBind,
} from "../common/interceptors.js";
import { monlibonAuth } from "./requests.js";
import { getUserData } from "./auth.js";
import qs from 'node:querystring';

export const monlibonClient = axios.create({
	baseURL: "https://www.ml-auto.by/webservice",
	headers: {
        "Content-Type": "application/x-www-form-urlencoded",
		// accept: "text/plain",
	},
});

interceptorsRequestBind(monlibonClient, (config) => {
	config.data = qs.stringify({...getUserData(),...config.data});

	console.log(config);
	return config;
});

// const requestData = qs.stringify({
// 	LOGIN: userData.username,
// 	PASSWORD: userData.password,
// 	ARTICLE: article,
// });

// interceptorsResponseBind(monlibonClient, async (originalRequest, error) => {
// 	const res = await monlibonAuth();

// 	if (res.status === 201 || res.status === 200 || res.status === 204) {
// 		originalRequest._retry = true;
// 		setToken(res.data.token);
// 		return monlibonClient(originalRequest);
// 	}
// });
