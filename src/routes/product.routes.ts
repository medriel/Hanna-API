import { Router } from "express";
import { CreateProductController } from "../modules/products/UseCases/CreateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();

productRoutes.post("/", createProductController.handle);

export { productRoutes }