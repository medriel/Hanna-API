import { Request, Response } from "express";
import { UserLoginUseCase } from "./UserLoginUseCase";

export class UserLoginController {
  async handle(req: Request, res: Response) {
    const { user_name, password } = req.body;

    const userLoginUseCase = new UserLoginUseCase();

    const result = await userLoginUseCase.execute({ user_name, password });

    return res.status(201).json(result);
  }
}