import { Router } from "express";
import { CreateProductController } from "../modules/products/UseCases/createProduct/CreateProductController";
import { CreateProductLocationController } from "../modules/products/UseCases/createProductLocation/CreateProductLocationController";
import { DeleteProductController } from "../modules/products/UseCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../modules/products/UseCases/listProducts/ListProductsController";
import { UpdateProductController } from "../modules/products/UseCases/updateProduct/UpdateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const createProductLocationController = new CreateProductLocationController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.post("/", createProductController.handle);

productRoutes.get("/", listProductsController.handle);

productRoutes.post("/location", createProductLocationController.handle);

productRoutes.patch("/:id", updateProductController.handle);

productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes }