import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductLocationDTO } from "../../dtos/CreateProductLocationDTO";

export class CreateProductLocationUseCase {
  async execute({ product_id, location_id }: CreateProductLocationDTO): Promise<void> {

    // verificar se o produto existe
    const productExists = await prisma.product.findUnique({
      where: {
        id: product_id
      }
    });

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    //verificar se a localização existe
    const locationExists = await prisma.location.findUnique({
      where: {
        id: location_id
      }
    });

    if (!locationExists) {
      throw new AppError("Location does not exists!");
    }

    await prisma.productLocation.create({
      data: {
        product_id,
        location_id
      }
    });
  }
}