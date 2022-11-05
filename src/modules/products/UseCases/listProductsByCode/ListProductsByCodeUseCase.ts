import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListProductsByCodeUseCase {
  async execute({ code }: any): Promise<Product[]> {
    const products = await prisma.product.findMany({
      where: {
        code
      },
      include: {
        ProductLocation: {
          select: {
            location: true
          }
        }
      }
    });

    return products;
  }
}