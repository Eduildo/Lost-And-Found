import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

const prisma = new PrismaClient()

export async function objects(request: FastifyRequest, reply: FastifyReply) {
  const objects = await prisma.object.findMany()

  return reply.status(200).send({objects})
}

