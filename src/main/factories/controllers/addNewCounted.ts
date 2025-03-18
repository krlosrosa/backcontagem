import { DbAddNewUser } from '../../../data/useCases/db-add-new-counted'
import { countedTypeSchema } from '../../../domain/usecases/addNewCounted'
import { RepositoryPrisma } from '../../../infra/db/repository-prisma'
import { ValidationZod } from '../../../presentation/validator/validatorZod'
import { AddNewCountedController } from '../../../presentation/controllers/addNewCountedrController'
import { type Controller } from '../../../presentation/protocols'

export const makeAddNewCounted = (): Controller => {
  const schemaValidation = new ValidationZod(countedTypeSchema)
  const countedRepository = new RepositoryPrisma()
  const countedDb = new DbAddNewUser(countedRepository)
  return new AddNewCountedController(countedDb, schemaValidation)
}
