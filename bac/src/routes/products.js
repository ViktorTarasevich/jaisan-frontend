import { Router } from "express";
import * as productControllers from "../controllers/product.js"

const productRouter = new Router();

productRouter.get("/get-all", productControllers.getAll);

export default productRouter;
