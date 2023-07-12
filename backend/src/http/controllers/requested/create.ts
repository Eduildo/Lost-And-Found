import { PrismaClient } from "@prisma/client";
import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";


const prisma = new PrismaClient()
export async function requestObject(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
  });

  const { id } = bodySchema.parse(request.params);

  const objectRequested = await prisma.objectREquested.findUnique({
    where: {
      id,
    },
  });

  if (objectRequested && request.user.sub === objectRequested.user_id) {
    return reply.status(409).send({ message: "Objeto já reivindicado" });
  }

  if (objectRequested) {
    return reply.status(409).send({ message: "Objeto já foi solicitado por outro usuário" });
  }

  const createdObjectRequested = await prisma.objectREquested.create({
    data: {
      object_id: id,
      user_id: request.user.sub,
    },
  });

  return reply.status(201).send({ objectRequested: createdObjectRequested });
}