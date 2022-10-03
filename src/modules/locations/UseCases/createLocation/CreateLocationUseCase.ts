import { Location } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateLocationDTO } from "../../dtos/CreateLocationDTO";

export class CreateLocationUseCase {
  async execute({ floor, type, reference }: CreateLocationDTO): Promise<Location> {
    //validar se o usuário é gestor

    // Verificar se a localização já existe
    const locationAlreadyExists = await prisma.location.findFirst({
      where: {
        floor,
        type,
        reference
      }
    });
    if (locationAlreadyExists) {
      throw new AppError("Location already exists!");
    }

    const product = await prisma.location.create({
      data: { floor, type, reference }
    })

    return product;
  }
}