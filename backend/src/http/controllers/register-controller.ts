import {FastifyRequest, FastifyReply} from "fastify";

import { z } from "zod";
import { RegisterUseCase } from "../../services/register";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-user-repository";
import { UserAlreadyExistsError } from "../../use-cases/errors/user-already-exists";


export async function register (request: FastifyRequest, reply:FastifyReply){
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        phone: z.number().min(9),
    })

    const {name, email, password, phone} = registerBodySchema.parse(request.body);

    const prismaUsersRepository = new PrismaUsersRepository();

    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    try{
        await registerUseCase.execute({
            name,
            email,
            password,
            phone,
        })

    }catch(err){
        if(err instanceof UserAlreadyExistsError){
            return reply.status(409).send({message: err.message});
        }
       throw err
    }

   
    return reply.status(201).send()
}