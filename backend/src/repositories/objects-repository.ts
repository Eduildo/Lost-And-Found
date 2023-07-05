import { Prisma } from "@prisma/client";

export interface ObjectsRepository{
    create(data: Prisma.ObjectUncheckedCreateInput): Promise<Object>
    searchMany(query: string, page: number): Promise<Object[]>
    findManyByUserId(userId: string): Promise<Object[]>
    findMany(): Promise<Object[]>   
}