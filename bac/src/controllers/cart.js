import { Cart } from "../models/Cart.js"
import { Product } from "../models/Product.js";

export const addToCart = async (req, res) => {
    // await Cart.create();
    try {
        const existProducts = await Cart.findAll({ where: { productArticul: req.body } });
        if (existProducts.length) {
            const duplicateProduct = req.body.map((product) => {
                const findedProductIndex = existProducts.findIndex(currentProduct => {
                    return currentProduct.productArticul === product;
                });
                if (findedProductIndex === -1) {
                    return Cart.create(
                        {user_id: 1,
                        count: 1,
                        productArticul: product}
                    )

                } else {
                    return Cart.update(
                        {count: existProducts[findedProductIndex].count + 1},
                        {where: {productArticul: product}})
                }
            })
           await Promise.allSettled(duplicateProduct);
        } else {
            const records = req.body.map(articul => {
                return {
                    user_id: 1,
                    count: 1,
                    productArticul: articul
                }
            })
            await Cart.bulkCreate(records);
        }
        res.status(200).json();
    } catch (e) {
        console.log(e);
    }
}

export const getCart = async (req, res) => {
    const products = await Cart.findAll({
        include: [{
            model: Product,
            attributes: { 
                exclude: ["in_stock"] 
            }
        }]
    });
    res.status(200).json(products);
}

export const deleteProduct = async (req,res) => {
    try{
        const cart = req.body;
        cart.map((product) => {
            return Cart.destroy({
                where: {
                  productArticul: product
                }
              });
        })
        await Promise.allSettled(cart);
        console.log(cart);
        res.status(200).json('ky');
    }catch(e){
        console.log(e);
    }
}