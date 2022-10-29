import { Product } from "../models/Product.js"

export const getAll = async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json(products);
}