import { PrismaUsersRepository } from "../../repositories/prisma/prisma-user-repository";
import { AuthenticateUseCase } from "../authente";

export function makeAuthenticateUseCase(){
    const prismaUsersRepository = new PrismaUsersRepository();
    const authenicateUseCase = new AuthenticateUseCase(prismaUsersRepository)

    return authenicateUseCase
}