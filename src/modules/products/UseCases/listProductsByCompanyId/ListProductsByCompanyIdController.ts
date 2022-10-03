import { Request, Response } from "express";
import { ListProductsByCompanyIdUseCase } from "./ListProductsByCompanyIdUseCase";

export class ListProductsByCompanyIdController {
  async handle(req: Request, res: Response) {
    const { company_id } = req.params;

    const listProductsByCompanyIdUseCase = new ListProductsByCompanyIdUseCase();

    const result = await listProductsByCompanyIdUseCase.execute({ company_id });

    return res.status(200).json(result);
  }
}