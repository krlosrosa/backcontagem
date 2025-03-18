import { type AddNewCounted } from '@/domain/usecases//addNewCounted'
import { type AddNewCountedRepository } from '../protocols/addNewCountedRepository'

export class DbAddNewUser implements AddNewCounted {
  constructor (
    private readonly addNewcountedRepository: AddNewCountedRepository
  ) {}

  async add (params: any): Promise<AddNewCounted.Result> {
    const response = await this.addNewcountedRepository.add(params)
    return response
  }
}
