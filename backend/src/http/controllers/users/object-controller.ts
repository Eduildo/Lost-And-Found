import {FastifyRequest, FastifyReply} from "fastify";

import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists";
import { makeRegisterUseCase } from "../../../use-cases/factories/makeregister-use-case";


export async function register (request: FastifyRequest, reply:FastifyReply){
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        phone: z.number().min(9),
    })

    const {name, email, password, phone} = registerBodySchema.parse(request.body);

  

    try{
        const registerUseCase = makeRegisterUseCase()
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