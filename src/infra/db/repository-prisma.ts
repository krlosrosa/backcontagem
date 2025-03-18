import { type AddNewCountedRepository } from '@/data/protocols/addNewCountedRepository'
import { PrismaClient } from '@prisma/client'

export class RepositoryPrisma implements AddNewCountedRepository {
  private readonly prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async add (params: AddNewCountedRepository.Params): Promise<AddNewCountedRepository.Result> {
    const data = await this.prisma.counted.createMany({
      data: params.params
    })
    if (data.count > 0) return true
    return false
  }
}
