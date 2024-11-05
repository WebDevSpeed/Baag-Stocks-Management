import { Router } from "express";
import { createProduct } from "../controller/product.controller.js";

const productRouter = Router();

productRouter.route('/create').post(createProduct)

export default productRouter;