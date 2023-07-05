import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function deleteObject(request: FastifyRequest, reply: FastifyReply) {

    const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const objectToDelete = await prisma.object.findUniqueOrThrow({
        where: {
          id,
        },
      })

      if (objectToDelete.user_id !== request.user.sub) {
      return reply.status(401).send()

      
    }

    await prisma.object.delete({
        where: {
          id,
        },
      })
}


