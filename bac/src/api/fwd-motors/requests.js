import qs from "querystring";
import { fwdMotorsClient } from "./axios-instance.js";
import {getUserData} from "./auth.js"

export const auth = async () => {
    const userData = getUserData();
    const reqData = qs.stringify({
        username: userData.username,
        password: userData.password
    });

    const res = await fwdMotorsClient.post("https://openapi.forward-motors.com/api/auth/login", reqData).catch(e => {
        console.log("Auth status:", e.response.status);
    });

    console.log("Auth status:", res?.status);

    return res;
}
