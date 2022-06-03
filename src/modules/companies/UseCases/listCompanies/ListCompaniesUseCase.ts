import { Company } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListCompaniesUseCase {
  async execute(): Promise<Company[]> {
    const companies = await prisma.company.findMany({})

    return companies;
  }
}