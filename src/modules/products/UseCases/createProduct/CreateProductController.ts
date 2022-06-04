import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      code,
      name,
      quantity,
      unit_of_measurement,
      reference,
      location_id,
      company_id,
    } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      code,
      name,
      quantity,
      unit_of_measurement,
      reference,
      location_id,
      company_id,
    });

    return res.status(201).json(result);

  }
}