import { Prisma } from "@prisma/client";

export interface ObjectsRepository{

    create(data: Prisma.ObjectUncheckedCreateInput): Promise<Object>

}