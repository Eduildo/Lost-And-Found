import { Object } from "@prisma/client";
import { ObjectsRepository } from "../repositories/objects-repository";

interface ObjectUseCaseRequest{
    type: string;
    description: string;
    dateLost: Date;
    status: string;
    local_founds: string;
    photo: string;
    userId: string;
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
        local_founds,
        photo,
        userId,
    }:ObjectUseCaseRequest): Promise<ObjectUseCaseResponse> {

    const object = await this.objectRepository.create({
        type,
        description,
        dateLost,
        status,
        local_founds,
        photo,
        user_id: userId,
    })

    return {
        object
    }
    
    }


}

