import { ObjectREquested } from "@prisma/client";
import { ObjectRequestedRepository } from "../repositories/object-requested-repository";


interface ObjectRequestedUseCaseRequest{
    objectId: string;
    userId: string;
}

interface ObjectRequestedUseCaseResponse{
    object: ObjectREquested
}

export class ObjectRequestedUseCase{
    constructor(private objectRequestedRepository: ObjectRequestedRepository){}

     async  execute({ 
        objectId,
        userId,
    }:ObjectRequestedUseCaseRequest): Promise<ObjectRequestedUseCaseResponse> {

        const userRequetObject = await this.objectRequestedRepository.findByUserIdOnRequested(
            userId,    
        )

        if(userRequetObject){
            throw new Error();
        }

    const object = await this.objectRequestedRepository.create({
        user_id: userId,
        object_id:objectId
    })

    return {
        object,
    }
    
    }

}

