import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListProductsByCompanyIdUseCase {
  async execute({ company_id }: any): Promise<Product[]> {

    const products = await prisma.product.findMany({
      where: {
        company_id: company_id
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