import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

export class CreateCompanyController {
  async handle(req: Request, res: Response) {
    const { cnpj, name, city, state } = req.body;

    const createCompanyUseCase = new CreateCompanyUseCase();

    const result = await createCompanyUseCase.execute({ cnpj, name, city, state });

    return res.status(201).json(result);
  }
}