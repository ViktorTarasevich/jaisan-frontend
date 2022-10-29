import qs from "node:querystring";
import { getUserData } from "./auth.js";
import { monlibonClient } from "./axios-instance.js";

export const monlibonAuth = async () => {
    const userInfo = getUserData();
    const reqData = qs.stringify({
        LOGIN: userInfo.username,
        PASSWORD: userInfo.password
    })
    // const data = await monlibonClient.post('https://www.ml-auto.by/webservice/ShowInfo/', reqData).catch((e => {
    //     console.log(e.status);
    // }));
    // console.log('Status:', data.status, data);
    // return data;
}

monlibonAuth();