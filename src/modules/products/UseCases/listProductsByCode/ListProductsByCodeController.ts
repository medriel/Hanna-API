import { Request, Response } from "express";
import { ListProductsByCodeUseCase } from "./ListProductsByCodeUseCase";

export class ListProductsByCodeController {
  async handle(req: Request, res: Response) {
    const { code } = req.params;

    const listProductsByCodeUseCase = new ListProductsByCodeUseCase();

    const result = await listProductsByCodeUseCase.execute({ code });

    return res.status(200).json(result);
  }
}