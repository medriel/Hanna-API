import { Request, Response } from "express";
import { UpdateProductLocationUseCase } from "./UpdateProductLocationUseCase";

export class UpdateProductLocationController {
  async handle(req: Request, res: Response) {

    const { product_id, location_id } = req.params;
    const { new_product_id, new_location_id } = req.body;

    const updateProductLocationUseCase = new UpdateProductLocationUseCase();

    await updateProductLocationUseCase.execute({ product_id, location_id, new_product_id, new_location_id });

    return res.status(204).send();
  }
}