import { Location } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateLocationDTO } from "../../dtos/CreateLocationDTO";

export class CreateLocationUseCase {
  async execute({ localization, type, reference }: CreateLocationDTO): Promise<Location> {

    const product = await prisma.location.create({
      data: { localization, type, reference }
    })

    return product;
  }
}