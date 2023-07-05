
import { ObjectsRepository } from "../repositories/objects-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";


interface GetAllObjectUseCaseRequest{
    objectId: string;
}
interface GetObjectsUseCaseResponse{
    object: Object
}


export class GetAllObjectUseCase{
    constructor(
        private objectRepository: ObjectsRepository
    ){}


    async execute(): Promise<GetObjectsUseCaseResponse>{
        //auth

        const objects = await this.objectRepository.findMany();

        if(!objects){
            throw new ResourceNotFoundError();
        }

        return{
            objects,
        }
    }
}