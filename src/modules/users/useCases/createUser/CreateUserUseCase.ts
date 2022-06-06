import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, user_name, email, password, company_id }: CreateUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    // Verificar se o email já existe
    const emailAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    //verificar se o user_name já existe
    const userNameAlreadyExists = await prisma.user.findUnique({
      where: {
        user_name
      }
    });

    if (emailAlreadyExists || userNameAlreadyExists) {
      //error
      throw new AppError("User already exists!");
    }

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        user_name,
        email,
        password: passwordHash,
        company_id
      }
    });

    return user;
  }
}