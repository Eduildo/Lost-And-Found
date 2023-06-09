import {expect, describe, it, beforeEach, afterEach, vi} from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists";

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe("Register Use Case", () => {

    beforeEach(() => {
         usersRepository = new InMemoryUsersRepository()
         sut = new RegisterUseCase(usersRepository);
         vi.useFakeTimers();  
        
    })

    afterEach(() => {
        vi.useRealTimers(); 
    })


    it("should be able to registe", async () =>{
        
    
        const {user} = await sut.execute({
            name:"John Doe",
            email: "johndoe@example.com",
            password: "123456",
            phone: 123456,
        })
    
       expect(user.id).toEqual(expect.any(String))
    
    }),



it("should hash user password upon registration", async () =>{
    const {user} = await sut.execute({
        name:"John Doe",
        email: "johndoe@example.com",
        password: "123456",
        phone: 123456,
    })
   const isPaswordCorrectlyHased = await compare("123456", user.password_hash)

   expect(isPaswordCorrectlyHased).toBe(true)

}),


it("should not able to register with same email twice", async () =>{
    const email = 'johndoe@example.com'
    vi.setSystemTime(new Date(2022, 2, 20, 8, 0, 0))

    sut.execute({
        name:"John Doe",
        email,
        password: "123456",
        phone: 123456,
    })

     await expect(() => sut.execute({
        name:"John Doe",
        email,
        password: "123456",
        phone: 123456,
    }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)

})

})