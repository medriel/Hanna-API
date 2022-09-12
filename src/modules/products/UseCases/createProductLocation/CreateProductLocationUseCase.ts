import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductLocationDTO } from "../../dtos/CreateProductLocationDTO";

export class CreateProductLocationUseCase {
  async execute({ product_id, location_id }: CreateProductLocationDTO): Promise<void> {

    // verificar se o produto existe
    const productExists = await prisma.product.findFirst({
      where: {
        id: product_id
      }
    });

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    //verificar se a localização existe
    const locationExists = await prisma.location.findFirst({
      where: {
        id: location_id
      }
    });

    if (!locationExists) {
      throw new AppError("Location does not exists!", 401);
    }

    await prisma.productLocation.create({
      data: {
        product_id,
        location_id
      }
    });
  }
}