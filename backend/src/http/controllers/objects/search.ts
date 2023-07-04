import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import {makeSearcObjectsUseCase} from "../../../use-cases/factories/make-search-objects-use-case"


export async function search (request: FastifyRequest, reply:FastifyReply){
    const searchObjectQuerySchema = z.object({
        q: z.string(),
        page: z.coerce.number().min(1).default(1),
       
    })

    const {q, page} = searchObjectQuerySchema.parse(request.body);
    const searchObjectUseCase = makeSearcObjectsUseCase()

   const {description} = await searchObjectUseCase.execute({
        query: q,
        page,
    })
  

   
    return reply.status(200).send({
        description
    })
}