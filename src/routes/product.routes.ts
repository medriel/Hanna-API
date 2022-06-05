import { Router } from "express";
import { CreateProductController } from "../modules/products/UseCases/createProduct/CreateProductController";
import { CreateProductLocationController } from "../modules/products/UseCases/createProductLocation/CreateProductLocationController";
import { ListProductsController } from "../modules/products/UseCases/listProducts/ListProductsController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const createProductLocationController = new CreateProductLocationController();

productRoutes.post("/", createProductController.handle);

productRoutes.get("/", listProductsController.handle);

productRoutes.post("/location", createProductLocationController.handle);

export { productRoutes }