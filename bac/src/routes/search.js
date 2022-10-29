import { Router } from "express";
import * as searchController from "../controllers/search.js";

const searchRouter = Router();

searchRouter.route('/search')
    .post(searchController.searchProduct);

export default searchRouter;