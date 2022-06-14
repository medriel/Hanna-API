import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteLocationUseCase {
  async execute({ id }: any): Promise<void> {

    const locationExists = await prisma.location.findFirst({
      where: {
        id
      }
    });

    if (!locationExists) {
      throw new AppError("Location does not exists!");
    }

    const locationContainProduct = await prisma.productLocation.findMany({
      where: {
        location_id: id
      }
    });

    if (locationContainProduct.length > 0) {
      throw new AppError("Location contains product!", 401);
    }

    await prisma.location.delete({
      where: { id }
    })
  }
}