import { PrismaObjectRepository } from "../../repositories/prisma/prisma-object-repository";
import { SearchObjectsUseCase } from '../search-objects-use-case'

export function makeSearcObjectsUseCase() {
  const objectsRepository = new PrismaObjectRepository()
  const useCase = new SearchObjectsUseCase(objectsRepository)

  return useCase
}