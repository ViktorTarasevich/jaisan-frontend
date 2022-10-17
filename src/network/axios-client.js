import axios from "axios";

import { API_BASE_URL, API_FORWARD_MOTOR_URL } from "../constants";

export const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const axiosClientForwardMotors = axios.create({
	baseURL: API_FORWARD_MOTOR_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	// add token to header
});
