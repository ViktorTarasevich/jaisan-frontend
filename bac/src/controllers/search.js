import { Product } from "../models/Product.js";
import {searchProductsByArticul} from "../api/shate-m/requests.js";
import {byArticul} from "../api/api-request/forward-motors-request.js";

export const searchProduct = async (req, res) => {
    try{
        const { query } = req.body

        const result = await searchProductsByArticul(query)
        const res = await byArticul(query)
        // console.log('SEARCH', result)
        res.status(200).json([...result, ...res])
    }catch(e) {
        console.log(e);
    }
}
