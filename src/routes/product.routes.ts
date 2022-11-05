import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateProductController } from "../modules/products/UseCases/createProduct/CreateProductController";
import { CreateProductLocationController } from "../modules/products/UseCases/createProductLocation/CreateProductLocationController";
import { DeleteProductController } from "../modules/products/UseCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../modules/products/UseCases/listProducts/ListProductsController";
import { ListProductsByCodeController } from "../modules/products/UseCases/listProductsByCode/ListProductsByCodeController";
import { ListProductsByCompanyIdController } from "../modules/products/UseCases/listProductsByCompanyId/ListProductsByCompanyIdController";
import { UpdateProductController } from "../modules/products/UseCases/updateProduct/UpdateProductController";
import { UpdateProductLocationController } from "../modules/products/UseCases/updateProductLocation/UpdateProductLocationController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const listProductsByCodeController = new ListProductsByCodeController();
const listProductsByCompanyIdController = new ListProductsByCompanyIdController();
const createProductLocationController = new CreateProductLocationController();
const updateProductController = new UpdateProductController();
const updateProductLocationController = new UpdateProductLocationController();
const deleteProductController = new DeleteProductController();

productRoutes.use(ensureAuthenticated);

productRoutes.post("/", createProductController.handle);

productRoutes.get("/", listProductsController.handle);

productRoutes.get("/:code", listProductsByCodeController.handle)

productRoutes.get("/:company_id", listProductsByCompanyIdController.handle);

productRoutes.post("/product-location", createProductLocationController.handle);

productRoutes.patch("/:id", updateProductController.handle);

productRoutes.put("/:product_id/:location_id", updateProductLocationController.handle);

productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes }