import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCompanyController } from "../modules/companies/UseCases/createCompany/CreateCompanyController";
import { ListCompaniesController } from "../modules/companies/UseCases/listCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

// companiesRoutes.use(ensureAuthenticated);

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", listCompaniesController.handle)

export { companiesRoutes }