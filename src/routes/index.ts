import { Router } from "express";
import { companiesRoutes } from "./company.routes";
import { locationRouter } from "./location.routes";
import { productRoutes } from "./product.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);

routes.use("/companies", companiesRoutes);

routes.use("/products", productRoutes);

routes.use("/locations", locationRouter);

export { routes };