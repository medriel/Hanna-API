import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

export class CreateCompanyController {
  async handle(req: Request, res: Response) {
    const { cnpj, name } = req.body;

    const createCompanyUseCase = new CreateCompanyUseCase();

    const result = await createCompanyUseCase.execute({ cnpj, name });

    return res.status(201).json(result);
  }
}