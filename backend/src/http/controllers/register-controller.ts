import {FastifyRequest, FastifyReply} from "fastify";

import { z } from "zod";
import { registerUseCase } from "../../services/register";


export async function register (request: FastifyRequest, reply:FastifyReply){
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        phone: z.number().min(9),
    })

    const {name, email, password, phone} = registerBodySchema.parse(request.body);

    try{
        await registerUseCase({
            name,
            email,
            password,
            phone,
        })

    }catch(err){
        return reply.status(409).send();

    }

   
    return reply.status(201).send()
}