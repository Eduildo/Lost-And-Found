import bcryptjs from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";
import { UserAlreadyExistsError } from "../use-cases/errors/user-already-exists";
import { User } from "@prisma/client";


interface RegisterUseCaseRequest{
    name: string;
    email: string;
    password: string;
    phone: number;
}

interface RegisterUseCaseResponse{
    user: User
}

export class RegisterUseCase{
    constructor(private usersRepository: UsersRepository){}

     async  execute({name, email, password, phone}:RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
        const password_hash = await bcryptjs.hash(password, 6);
    
        const userWithSameEmail = await this.usersRepository.findByEmail(email);
    
        if(userWithSameEmail){
           throw new UserAlreadyExistsError()
        }
    
      
    //const prismaUsersRepository = new PrismaUsersRepository();
    
    const user = await this.usersRepository.create({name, email, password_hash, phone})

    return {
        user,
    }
    
    }


}

