import { Router } from "express";

import * as orderControllers from "../controllers/order.js"

const orderRouter = Router();

orderRouter.route("/order")
	.post(orderControllers.addOrder)
export default orderRouter;