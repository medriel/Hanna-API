import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { prisma } from "../prisma/client";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id } = verify(token, "725f1e824bc0641634f155834ba62f0f") as IPayload;

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!user) {
      throw new AppError("User does not exists!")
    }

    next();
  } catch {
    throw new AppError("Invalid token");
  }
}