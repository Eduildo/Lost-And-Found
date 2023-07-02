import {expect, describe, it, beforeEach, vi, afterEach} from "vitest";
import { InMemoryObjectsRequestedRepository } from "../repositories/in-memory/in-memory-object-requested-repository";
import { ObjectRequestedUseCase } from "./object-requested";



let objectsRequestedRepository: InMemoryObjectsRequestedRepository
let sut: ObjectRequestedUseCase

describe("Request Object use case", () => {
    beforeEach(() => {
        objectsRequestedRepository = new InMemoryObjectsRequestedRepository()
        sut = new ObjectRequestedUseCase(objectsRequestedRepository);
   })

   vi.useFakeTimers();

   afterEach(() => {
    vi.useRealTimers();
   })

   it("should be able to request an object", async () =>{

    const {object} = await sut.execute({
        userId: "user-1",
        objectId: "object-1",

    })

    console.log(object.created_at)
 

    expect(object.id).toEqual(object.id)
 })


 it("should not able to request an object twice", async () =>{
    vi.setSystemTime(new Date(2023, 2, 8, 11, 22));
    await sut.execute({
        userId: "user-1",
        objectId: "object-1",

    })

    await expect(() => sut.execute({
        userId: "user-1",
        objectId: "object-1",

    })).rejects.toBeInstanceOf(Error)
 })


})

    
    

