import { prisma } from "../lib/prisma";
import bcryptjs from "bcryptjs";
import { PrismaUsersRepository } from "../repositories/prisma-user-repository";

interface RegisterUseCaseRequest{
    name: string;
    email: string;
    password: string;
    phone: number;
}



export async function registerUseCase({name, email, password, phone}:RegisterUseCaseRequest) {
    const password_hash = await bcryptjs.hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
        where:{email,}
    })

    if(userWithSameEmail){
       throw new Error("Email already exists")
    }

  
const prismaUsersRepository = new PrismaUsersRepository();

await prismaUsersRepository.create({name, email, password_hash, phone})

}