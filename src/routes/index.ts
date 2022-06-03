import { Router } from "express";
import { companiesRoutes } from "./company.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);

routes.use("/companies", companiesRoutes)

export { routes };