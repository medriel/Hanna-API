import { Request, Response } from "express";
import { AuthenticationUserUseCase } from "./AuthenticationUserUseCase";

class AuthenticationUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const authenticationUserUseCase = new AuthenticationUserUseCase();

    const token = await authenticationUserUseCase.execute({ email, password });

    return res.json(token);
  }
}

export { AuthenticationUserController };