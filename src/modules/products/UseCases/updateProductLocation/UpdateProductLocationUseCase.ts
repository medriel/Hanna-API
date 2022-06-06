import { ProductLocation } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateProductLocationDTO } from "../../dtos/UpdateProductLocationDTO";

export class UpdateProductLocationUseCase {
  async execute({ product_id, location_id, new_product_id, new_location_id }: UpdateProductLocationDTO): Promise<ProductLocation> {

    const productExists = await prisma.productLocation.findFirst({
      where: { product_id }
    });

    const locationExists = await prisma.productLocation.findFirst({
      where: { location_id }
    });

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    if (!locationExists) {
      throw new AppError("Location does not exists!");
    }

    const productLocationUpdated = await prisma.productLocation.update({
      where: {
        product_id_location_id: {
          location_id,
          product_id
        }
      },
      data: {
        location_id: new_location_id,
        product_id: new_product_id
      }
    })

    return productLocationUpdated;

  }
}