import {expect, describe, it} from "vitest";
import { RegisterUseCase } from "../services/register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists";

describe("Register Use Case", () => {
    it("should be able to registe", async () =>{
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository);
    
        const {user} = await registerUseCase.execute({
            name:"John Doe",
            email: "johndoe@example.com",
            password: "123456",
            phone: 123456,
        })
    
       expect(user.id).toEqual(expect.any(String))
    
    }),



it("should hash user password upon registration", async () =>{
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository);

    const {user} = await registerUseCase.execute({
        name:"John Doe",
        email: "johndoe@example.com",
        password: "123456",
        phone: 123456,
    })

   const isPaswordCorrectlyHased = await compare("123456", user.password_hash)

   expect(isPaswordCorrectlyHased).toBe(true)

}),

it("should not able to register with same email twice", async () =>{
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository);

    const email = "johndoe@example.com"

   await registerUseCase.execute({
        name:"John Doe",
        email,
        password: "123456",
        phone: 123456,
    }),

     expect(() => registerUseCase.execute({
        name:"John Doe",
        email,
        password: "123456",
        phone: 123456,
    }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)

})


})