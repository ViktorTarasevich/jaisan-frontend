import { Router } from "express";

import * as cartControllers from "../controllers/cart.js"

const cartRouter = Router();

cartRouter.route("/cart")
	.get(cartControllers.getCart)
	.post(cartControllers.addToCart)
	.delete(cartControllers.deleteProduct);

export default cartRouter;
