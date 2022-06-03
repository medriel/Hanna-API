import { Router } from "express";
import { CreateCompanyController } from "../modules/companies/UseCases/createCompany/CreateCompanyController";
import { ListCompaniesController } from "../modules/companies/UseCases/listCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", listCompaniesController.handle)

export { companiesRoutes }