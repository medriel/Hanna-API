import { Location } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateLocationDTO } from "../../dtos/CreateLocationDTO";

export class CreateLocationUseCase {
  async execute({ localization, type, reference }: CreateLocationDTO): Promise<Location> {

    // Verificar se a localização já existe
    const locationAlreadyExists = await prisma.location.findFirst({
      where: {
        localization,
        type,
        reference
      }
    });
    if (locationAlreadyExists) {
      throw new AppError("Location already exists!");
    }

    const product = await prisma.location.create({
      data: { localization, type, reference }
    })

    return product;
  }
}