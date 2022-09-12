import { User } from "@prisma/client";
import { compare } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UserLoginDTO } from "../../dtos/CreateUserDTO";

export class UserLoginUseCase {
  async execute({ user_name, password }: UserLoginDTO): Promise<User> {

    const user = await prisma.user.findUnique({
      where: {
        user_name
      }
    });

    if (!user) {
      throw new AppError("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }

    Reflect.deleteProperty(user, 'password')

    return user;
  }
}