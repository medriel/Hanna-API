import { Request, Response } from "express";
import { DeleteLocationUseCase } from "./DeleteLocationUseCase";

export class DeleteLocationController {
  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const deleteLocationUseCase = new DeleteLocationUseCase();

    await deleteLocationUseCase.execute({ id });

    return res.status(204).send();
  }
}