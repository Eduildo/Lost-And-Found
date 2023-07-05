import { Prisma } from "@prisma/client";
import { ObjectsRepository } from "../objects-repository";
import { prisma } from "../../lib/prisma";

export class PrismaObjectRepository implements ObjectsRepository{
  async findMany(): Promise<Object[]> {
    const objects = await prisma.object.findMany()

    return objects
  }

    async searchMany(query: string, page: number): Promise<Object[]> {
        const objects = await prisma.object.findMany({
      where: {
        description: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return objects
    }
   async findManyByUserId(userId: string): Promise<Object[]> {
        const objectsRequested = await prisma.object.findMany({
            where:{user_id: userId,}
        })

        return objectsRequested
    }
    create(data: Prisma.ObjectUncheckedCreateInput){
        const object = prisma.object.create({
            data,
        })

        return object;
    }
    
}