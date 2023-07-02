import { Prisma } from "@prisma/client";
import { ObjectsRepository } from "../objects-repository";
import { prisma } from "../../lib/prisma";

export class PrismaObjectRepository implements ObjectsRepository{
    findManyByUserId(userId: string): Promise<Object[]> {
        throw new Error("Method not implemented.");
    }
    create(data: Prisma.ObjectUncheckedCreateInput){
        const object = prisma.object.create({
            data,
        })

        return object;
    }
    
}