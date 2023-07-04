import { ObjectsRepository } from '../repositories/objects-repository'
import { Object } from '@prisma/client'

interface SearchObjectUseCaseRequest {
  query: string
  page: number
}

interface SearchObjectUseCaseResponse {
  objects: Object[]
}

export class SearchObjectsUseCase {
  constructor(private objectsRepository: ObjectsRepository) {}

  async execute({
    query,
    page,
  }: SearchObjectUseCaseRequest): Promise<Object> {
    const objects = await this.objectsRepository.searchMany(query, page)

    return {
        objects,
    }
  }
}