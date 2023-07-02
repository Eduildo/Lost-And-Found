import { Object, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { ObjectsRepository } from "../objects-repository";

export class InMemoryObjectsRepository implements ObjectsRepository {
    
    public items: Object[] = [];

    async findManyByUserId(userId: string) {
        return this.items.filter(item => item.user_id === userId)
    }

        async create(data: Prisma.ObjectUncheckedCreateInput){
            const object ={
                id: randomUUID(),
                type: data.type,
                description:data.description,
                latitude: data.latitude,
                longitude: data.longitude,
                dateLost: data.dateLost ? new Date(data.dateLost): new Date(),
                status: data.status,
                user_id: data.user_id,
                photo: data.photo,
                created_at: new Date(),
            }
            this.items.push(object);
            return object;
        }
    }

