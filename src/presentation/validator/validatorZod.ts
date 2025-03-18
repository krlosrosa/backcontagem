import { type validationParamsType, type ValidatorParams } from '@/presentation/validator/protocols/validator'
import { ZodError, type ZodSchema } from 'zod'

export class ValidationZod implements ValidatorParams {
  private readonly schema: ZodSchema
  constructor (schema: ZodSchema) {
    this.schema = schema
  }

  async validate (params: unknown): Promise<validationParamsType> {
    // Valida os parâmetros usando o schema do Zod
    try {
      await this.schema.parse(params)
      return {
        validate: true,
        error: ''
      }
    } catch (error) {
      if (error instanceof ZodError) {
      // Extrai as mensagens de erro
        const errors = error.errors.map(e => e.message).join(' | ')

        return {
          validate: false,
          error: errors
        }
      }
    }
  }
}
