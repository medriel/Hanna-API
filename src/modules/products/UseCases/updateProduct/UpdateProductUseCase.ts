import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateProductDTO } from "../../dtos/UpdateProductDTO";

export class UpdateProductUseCase {
  async execute({ id, quantity }: UpdateProductDTO) {
    console.log(id)
    console.log(quantity)

    const productExists = await prisma.product.findUnique({
      where: {
        id
      }
    });

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    const product = await prisma.product.update({
      where: {
        id
      },
      data: {
        quantity
      }
    });

    return product;
  }
}