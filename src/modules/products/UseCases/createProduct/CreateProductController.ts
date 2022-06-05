import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      code,
      name,
      unit_of_measurement,
      quantity,
      company_id,
    } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      code,
      name,
      unit_of_measurement,
      quantity,
      company_id,
    });

    return res.status(201).json(result);

  }
}