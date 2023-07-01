
import { compare } from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";
import { InvalidCredentialsError } from "../use-cases/errors/invalid-credentials-error";
import { User } from "@prisma/client";

interface AuthenticateUseCaseRequest{
    email: string;
    password: string;
}
interface AuthenticateUseCaseResponse{
    user: User
}


export class AuthenticateUseCase{
    constructor(
        private usersRepository: UsersRepository
    ){}


    async execute({email, password}: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse>{
        //auth

        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new InvalidCredentialsError();
        }

        const doesPasswordsMatches = await compare(password, user.password_hash);

        if(!doesPasswordsMatches){
            throw new InvalidCredentialsError();
        }

        return{
            user,
        }
    }
}