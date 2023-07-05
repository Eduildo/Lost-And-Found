import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function updateObject(request: FastifyRequest, reply: FastifyReply) {

    const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const bodySchema = z.object({
        type: z.string(),
        description: z.string(),
        dateLost: z.coerce.date(),
        local_founds: z.string(),
        photo: z.string(),

      })

      const {type, description, dateLost, local_founds, photo} = bodySchema.parse(request.body);

      let objectToUpdate = await prisma.object.findUnique({
        where: {
          id,
        },
      })

      if (objectToUpdate.user_id !== request.user.sub) {
      return reply.status(401).send()

      
    }

    objectToUpdate = await prisma.object.update({
        where: {
          id,
        },
        data: {
            type, 
            description, 
            dateLost, 
            local_founds,
            photo, 
        },
      })
}


