import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteProductUseCase {
  async execute({ id }: any): Promise<void> {

    const productExists = await prisma.product.findFirst({
      where: {
        id
      }
    });

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    if (productExists.quantity > 0) {
      throw new AppError("Product still in stock", 401);
    }

    const productIsAllocated = await prisma.productLocation.findMany({
      where: {
        product_id: id
      }
    })

    if (productIsAllocated.length > 0) {
      throw new AppError("Product allocated in stock", 402)
    }

    await prisma.product.delete({
      where: { id }
    })

  }
}