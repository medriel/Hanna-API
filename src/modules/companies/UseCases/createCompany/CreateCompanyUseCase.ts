import { Company } from "@prisma/client";
import { cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateCompanyDTO } from "../../dtos/CreateCompanyDTO";

export class CreateCompanyUseCase {
  async execute({ cnpj, name }: CreateCompanyDTO): Promise<Company> {

    const companyAlreadyExists = await prisma.company.findUnique({
      where: {
        cnpj
      }
    });

    if (companyAlreadyExists) {
      throw new AppError("Company already exists!");
    }

    const cnpjIsValid = cnpjValidator.isValid(cnpj);

    if (!cnpjIsValid) {
      throw new AppError("CNPJ is invalid!");
    }

    const company = await prisma.company.create({
      data: {
        cnpj,
        name
      }
    });

    return company;
  }
}