import { Request, Response } from "express";
import { AuthenticationUserUseCase } from "./AuthenticationUserUseCase";

class AuthenticationUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, user_name } = req.body;

    const authenticationUserUseCase = new AuthenticationUserUseCase();

    const token = await authenticationUserUseCase.execute({ user_name, password });

    return res.json(token);
  }
}

export { AuthenticationUserController };