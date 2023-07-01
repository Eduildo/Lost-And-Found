import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-user-repository";
import { AuthenticateUseCase } from "../../services/authente";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credentials-error";


export async function authenticate (request: FastifyRequest, reply:FastifyReply){
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { email, password} = authenticateBodySchema.parse(request.body);

    const prismaUsersRepository = new PrismaUsersRepository();

    const authenicateUseCase = new AuthenticateUseCase(prismaUsersRepository)

    try{
        await authenicateUseCase.execute({
            email,
            password,
        })

    }catch(err){
        if(err instanceof InvalidCredentialsError){
            return reply.status(400).send({message: err.message});
        }
       throw err
    }

   
    return reply.status(200).send()
}