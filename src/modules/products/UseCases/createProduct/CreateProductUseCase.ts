import { Product } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductUseCase {
  async execute({
    code,
    name,
    unit_of_measurement,
    quantity,
    company_id
  }: CreateProductDTO): Promise<Product> {

    const productAlreadyExists = await prisma.product.findUnique({
      where: {
        code
      }
    });

    if (productAlreadyExists) {
      throw new AppError("Product already exists!");
    }

    const product = await prisma.product.create({
      data: {
        code,
        name,
        unit_of_measurement,
        quantity,
        company_id
      }
    });

    return product;
  }
}