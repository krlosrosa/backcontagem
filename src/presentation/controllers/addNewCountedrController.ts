import { type HttpResponse, type Controller } from '../protocols'
import { badRequest, ok, serverError } from '../helpers'
import { type ValidatorParams } from '../validator/protocols/validator'
import { InvalidParamError } from '../errors/invalid-param-error'
import { type AddNewCounted } from '@/domain/usecases/addNewCounted'

export class AddNewCountedController implements Controller {
  constructor (
    private readonly addNewCounted: AddNewCounted,
    private readonly validationSchema: ValidatorParams
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    try {
      console.log(request)
      const validationParams = await this.validationSchema.validate(request)
      if (!validationParams.validate) return badRequest(new InvalidParamError(validationParams.error))
      const user = await this.addNewCounted.add(request)
      return ok(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
