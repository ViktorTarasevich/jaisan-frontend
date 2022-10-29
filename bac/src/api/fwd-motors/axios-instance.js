import axios from "axios";
import {
	interceptorsRequestBind,
	interceptorsResponseBind,
} from "../common/interceptors.js";
import { auth } from "./requests.js";
import { getToken, setToken } from "./auth.js";

export const fwdMotorsClient = axios.create({
	baseURL: "http://openapi.forward-motors.com/api/2.0",
	headers: {
		accept: 'application/json',
	},
});

interceptorsRequestBind(fwdMotorsClient, (config) => {
	const token = getToken();
	if (token) {
		config.headers["Authorization"] = token;
	}

	return config;
});

interceptorsResponseBind(fwdMotorsClient, async (originalRequest, error) => {
	const res = await auth();

	if (res.status === 201 || res.status === 200 || res.status === 204) {
		originalRequest._retry = true;
		setToken(res.data.token);
		return fwdMotorsClient(originalRequest);
	}
});