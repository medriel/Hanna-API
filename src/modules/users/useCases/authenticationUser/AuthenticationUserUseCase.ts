import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string
  };
  token: string;
}

class AuthenticationUserUseCase {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      throw new AppError("E-mail or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("E-mail or password incorrect!");
    }

    const token = sign({}, "725f1e824bc0641634f155834ba62f0f", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;

  }
}

export { AuthenticationUserUseCase };