import {expect, describe, it, beforeEach} from "vitest";
import { InMemoryObjectsRepository } from "../repositories/in-memory/in-memory-objects-repository";
import { ObjectUseCase } from "./object";


let objectsRepository: InMemoryObjectsRepository 
let sut: ObjectUseCase

describe("Object Use Case", () => {

    beforeEach(() => {
        objectsRepository = new InMemoryObjectsRepository()
         sut = new ObjectUseCase(objectsRepository);
        
    })
    it("should be able to registe", async () =>{
        
    
        const {object} = await sut.execute({
            type: "carteira",
            description: "Carteira preta Zara",
            dateLost: "12-01-2022",
            status: "lost",
            latitude: 22.35379292,
            longitude: 24.123456,
            photo: "Minhafoto.png",
            user_id: "user-1",
        })
    
       expect(object.id).toEqual(expect.any(String))
    
    }),

})