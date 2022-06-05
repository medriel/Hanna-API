import { Request, Response } from "express";
import { CreateLocationUseCase } from "./CreateLocationUseCase";

export class CreateLocationController {

  async handle(req: Request, res: Response) {

    const { localization, type, reference } = req.body;

    const createLocalizationUseCase = new CreateLocationUseCase();

    const result = await createLocalizationUseCase.execute({
      localization,
      type,
      reference
    });

    return res.status(201).json(result);
  }
}