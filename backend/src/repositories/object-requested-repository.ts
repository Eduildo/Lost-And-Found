import { ObjectREquested, Prisma } from "@prisma/client";

export interface ObjectRequestedRepository{
    create(data: Prisma.ObjectREquestedUncheckedCreateInput): Promise<ObjectREquested> 
    findByUserIdOnRequested(userId: string): Promise<ObjectREquested | null>  
}