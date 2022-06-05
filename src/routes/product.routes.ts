import { Router } from "express";
import { CreateProductController } from "../modules/products/UseCases/createProduct/CreateProductController";
import { ListProductsController } from "../modules/products/UseCases/listProducts/ListProductsController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

productRoutes.post("/", createProductController.handle);

productRoutes.get("/", listProductsController.handle);

export { productRoutes }