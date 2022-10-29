import axios from "axios";
import {
	interceptorsRequestBind,
} from "../common/interceptors.js";
import { getUserData } from "./auth.js";
import https from "https";

export const autospaceClient = axios.create({
	baseURL: "https://auto1.by/WebApi",
	headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
	},
    httpsAgent: new https.Agent({
        rejectUnauthorized: false // set to false
      })
});

interceptorsRequestBind(autospaceClient, (config) => {
    config.params = {...config.params, ...getUserData()};
	return config;
});