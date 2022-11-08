import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, email, password, type, company_id }: CreateUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    // Verificar se o email já existe
    const emailAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (emailAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        type,
        company_id
      }
    });

    return user;
  }
}