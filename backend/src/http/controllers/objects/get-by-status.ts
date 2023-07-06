import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function objectsByStatus(request: FastifyRequest, reply: FastifyReply) {

    const paramsSchema = z.object({
        status: z.string(),
      })

      const { status } = paramsSchema.parse(request.params)


      const object = await prisma.object.findMany({
        where: {
            status,
        },
      })

  return object
}

