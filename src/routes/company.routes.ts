import { Router } from "express";
import { CreateCompanyController } from "../modules/companies/UseCases/createCompany/CreateCompanyController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();

companiesRoutes.post("/", createCompanyController.handle);

export { companiesRoutes }