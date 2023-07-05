import {FastifyRequest, FastifyReply} from "fastify";

import { z } from "zod";

import { makeObjectUseCase } from "../../../use-cases/factories/make-object-use-case";


export async function create (request: FastifyRequest, reply:FastifyReply){
    const creatObjectBodySchema = z.object({
        type: z.string(),
        description: z.string(),
        dateLost: z.coerce.date(),
        status: z.string(),
        local_founds: z.string(),
        photo: z.string(),
        userId: z.string(),
    })

    const {type, description, dateLost, status, local_founds, photo, userId} = creatObjectBodySchema.parse(request.body);

  

        const createObjectUseCase = makeObjectUseCase()
        await createObjectUseCase.execute({
            type, 
            description, 
            dateLost, 
            status, 
            local_founds, 
            photo, 
            userId
        })

  

   
    return reply.status(201).send()
}