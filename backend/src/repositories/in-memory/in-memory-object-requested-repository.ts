import {ObjectREquested, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { ObjectRequestedRepository } from "../object-requested-repository";

export class InMemoryObjectsRequestedRepository implements ObjectRequestedRepository {
   
    public items: ObjectREquested[] = [];

    async findByUserIdOnRequested(userId: string) {

        const userRequestObject = this.items.find((objectRequestd) => objectRequestd.user_id === userId)

        if(!userRequestObject){
            return null
        }
        
        return userRequestObject
    }

        async create(data: Prisma.ObjectREquestedUncheckedCreateInput){
            const objectRequested ={
                id: randomUUID(),
                user_id: data.user_id,
                object_id: data.object_id,
                created_at: new Date(),
            }
            this.items.push(objectRequested);
            return objectRequested;
        }
    }

