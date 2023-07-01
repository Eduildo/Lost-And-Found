import { Object } from "@prisma/client";
import { ObjectsRepository } from "../repositories/objects-repository";


interface ObjectUseCaseRequest{
    type: string;
    description: string;
    dateLost: Date;
    status: string;
    latitude: number;
    longitude: number;
    photo: string;
    user_id: string;
}

interface ObjectUseCaseResponse{
    object: Object
}

export class ObjectUseCase{
    constructor(private objectRepository: ObjectsRepository){}

     async  execute({ 
        type,
        description,
        dateLost,
        status,
        latitude,
        longitude,
        photo,
        user_id
    }:ObjectUseCaseRequest): Promise<ObjectUseCaseResponse> {

    
    const object = await this.objectRepository.create({
        type,
        description,
        dateLost,
        status,
        latitude,
        longitude,
        photo,
        user_id: user_id,
    })

    return {
        object,
    }
    
    }


}

