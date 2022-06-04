import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, email, password, company_id }: CreateUserDTO): Promise<User> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
      //error
      throw new AppError("User already exists!");
    }

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        company_id
      }
    });

    return user;
  }
}