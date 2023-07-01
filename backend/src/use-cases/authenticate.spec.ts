import {expect, describe, it, beforeEach} from "vitest";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import bcryptjs from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { AuthenticateUseCase } from "./authente";


let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe("Register Use Case", () => {

    beforeEach(() => {
         usersRepository = new InMemoryUsersRepository()
         sut = new AuthenticateUseCase(usersRepository);
    })
    it("should be able to authenticate", async () =>{

        await usersRepository.create({
            name: "John Doe",
            email: "john.doe@gmail.com",
            password_hash: await bcryptjs.hash("123456", 6), 
            phone: 123456,
        })
    
        const {user} = await sut.execute({
            email: "johndoe@example.com",
            password: "123456",
        })
    
       expect(user.id).toEqual(expect.any(String))
    
    })

    it("should not be able to authenticate with wrong email", async () =>{

        await expect(() => sut.execute({
            email: "john.doe@gmail.com",
            password: "123456" 

        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    
    })

    it("should not be able to authenticate with wrong password", async () =>{
        await usersRepository.create({
            name: "John Doe",
            email: "john.doe@gmail.com",
            password_hash: await bcryptjs.hash("123456", 6), 
            phone: 123456,
        })

        await expect(() => sut.execute({
            email: "john.doe@gmail.com",
            password: "123456" 

        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    
    })
})