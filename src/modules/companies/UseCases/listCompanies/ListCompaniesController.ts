import { Request, Response } from "express";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

export class ListCompaniesController {
  async handle(req: Request, res: Response) {
    const listCompaniesUseCase = new ListCompaniesUseCase();

    const result = await listCompaniesUseCase.execute();

    return res.status(200).json(result);
  }
}