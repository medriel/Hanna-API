import { Location } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class ListLocationsUseCase {
  async execute(): Promise<Location[]> {
    const locations = await prisma.location.findMany({
      include: {
        ProductLocation: {
          select: {
            product: {
              select: {
                name: true,
              }
            }
          }
        }
      }
    });

    return locations;
  }
}