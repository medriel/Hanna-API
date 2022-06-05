import { Request, Response } from "express";
import { CreateProductLocationUseCase } from "./CreateProductLocationUseCase";

export class CreateProductLocationController {
  async handle(req: Request, res: Response) {
    const { product_id, location_id } = req.body;

    const createProductLocationUseCase = new CreateProductLocationUseCase();

    await createProductLocationUseCase.execute({ product_id, location_id });

    return res.status(201).send();
  }
}