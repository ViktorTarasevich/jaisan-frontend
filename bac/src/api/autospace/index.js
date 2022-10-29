import axios from "axios";
import { getUserData } from "./auth.js";
import { autospaceClient } from "./axios-instance.js";

export const byArticul = async () => {
    const userInfo = getUserData();
    // const res = await autospaceClient.get('/GetRequestParameters', {
    //     params: userInfo
    // }).catch(e => {
    //     console.log(e?.response?.status);
    // });
    // console.log(res);

    const res = await autospaceClient.get('/GetRequestParameters').catch(e => console.log(e));

    console.log(JSON.stringify(res.data, null, 4));
}
byArticul();
