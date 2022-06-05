import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { quantity } = req.body;

    const updateProductUseCase = new UpdateProductUseCase();

    await updateProductUseCase.execute({ id, quantity });

    return res.status(204).send();
  }
}