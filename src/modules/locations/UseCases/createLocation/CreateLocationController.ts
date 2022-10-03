import { Request, Response } from "express";
import { CreateLocationUseCase } from "./CreateLocationUseCase";

export class CreateLocationController {

  async handle(req: Request, res: Response) {

    const { floor, type, reference } = req.body;

    const createLocalizationUseCase = new CreateLocationUseCase();

    const result = await createLocalizationUseCase.execute({
      floor,
      type,
      reference
    });

    return res.status(201).json(result);
  }
}