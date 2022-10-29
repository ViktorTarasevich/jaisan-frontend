import { fwdMotorsClient } from './axios-instance.js';

export const byArticul = async () => {
    const article = 'DER21009';
    const reqData = {
        Phrase: article,
        InStockOnly: false
    };
    const res = await fwdMotorsClient.get("/parts", {
        params: reqData
    }).catch(e => {
        console.log(e.status);
    });
    console.log(res.data);
    // const item = await articulAdapter(res.data);
    // console.log(item);
    // return item;
}

byArticul()