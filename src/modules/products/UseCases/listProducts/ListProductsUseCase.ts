import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListProductsUseCase {
  async execute(): Promise<Product[]> {

    const products = await prisma.product.findMany({
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