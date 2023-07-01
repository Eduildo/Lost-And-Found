import {expect, describe, it} from "vitest";
import { RegisterUseCase } from "../services/register";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import { AuthenticateUseCase } from "../services/authente";
import bcryptjs from "bcryptjs";


describe("Register Use Case", () => {
    it("should be able to authenticate", async () =>{
        const usersRepository = new InMemoryUsersRepository()
        const authenticateUseCase = new AuthenticateUseCase (usersRepository);

        await usersRepository.create({
            name: "John Doe",
            email: "john.doe@gmail.com",
            password_hash: await bcryptjs.hash("123456", 6), 
            phone: 123456,
        })
    
        const {user} = await authenticateUseCase.execute({
            email: "johndoe@example.com",
            password: "123456",
        })
    
       expect(user.id).toEqual(expect.any(String))
    
    })
})