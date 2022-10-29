import axios from 'axios';
import { articulAdapter } from '../api-adapters/forward-motors-adapters.js';
import { fwdMotorsClient } from '../fwd-motors/axios-instance.js';

export const byArticul = async (article) => {
    // const article = 'DER21009';
    const url = `api/2.0/parts?Phrase=${article}&InStockOnly=false`;
    const res = await fwdMotorsClient.get(url)
    return res.data
    // const res = await fwdMotorsClient.get("/api/info").catch(e => e);
    // console.log(res);
    // const r = await fwdMotorsClient.get("/basket");
    // console.log(r);
    // // const item = articulAdapter(res.data);
    // return item;
}
