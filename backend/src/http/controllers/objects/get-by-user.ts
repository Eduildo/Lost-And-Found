import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

const prisma = new PrismaClient()

export async function myObjects(request: FastifyRequest, reply: FastifyReply) {
  
  const objects = await prisma.object.findMany({
    where:{
        user_id:request.user.sub,
    }
  })
  console.log(objects)

  return reply.status(200).send({objects})
}

