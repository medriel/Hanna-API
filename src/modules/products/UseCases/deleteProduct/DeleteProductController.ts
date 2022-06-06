import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const deleteProductUseCase = new DeleteProductUseCase();

    await deleteProductUseCase.execute({ id });

    return res.status(204).send();
  }
}