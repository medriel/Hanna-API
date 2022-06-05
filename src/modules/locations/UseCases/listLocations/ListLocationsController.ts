import { Request, Response } from "express";
import { ListLocationsUseCase } from "./ListLocationsUseCase";

export class ListLocationsController {

  async handle(req: Request, res: Response) {
    const listLocationsUseCase = new ListLocationsUseCase();

    const result = await listLocationsUseCase.execute();

    return res.status(200).json(result);
  }
}