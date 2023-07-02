import { PrismaObjectRepository } from "../../repositories/prisma/prisma-object-repository";
import { ObjectUseCase } from "../object";

export function makeObjectUseCase(){
    const prismaObjectRepository = new PrismaObjectRepository();

    const registerUseCase = new ObjectUseCase(prismaObjectRepository)

    return registerUseCase
}