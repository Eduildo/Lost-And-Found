import { PrismaClient } from "@prisma/client";
import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";


const prisma = new PrismaClient()
export async function requestObject (request: FastifyRequest, reply:FastifyReply){
    const bodySchema = z.object({
        id: z.string(),
      })

      const { id } = bodySchema.parse(request.params)

      const object = await prisma.object.findUnique({
        where:{
            id,
        }
      })


      const objectRequested =  await prisma.objectREquested.create({

        data:{
            object_id: object.id,
            user_id: request.user.sub,
            
        }     
        })

  

   
    return reply.status(201).send({objectRequested})
}