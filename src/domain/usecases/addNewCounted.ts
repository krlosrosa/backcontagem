import { z } from 'zod'

export interface AddNewCounted {
  add: (params: AddNewCounted.Params) => Promise<AddNewCounted.Result>
}

export namespace AddNewCounted {
  export type Params = {
    params: ParamsSchema[]
  }
  export type Result = boolean
}

export const countedTypeSchema = z.object({
  params: z.array(
    z.object({
      id: z.number().optional(),
      data: z.string(),
      endereco: z.string(),
      lote: z.string().optional(),
      sku: z.string().optional(),
      caixa: z.number().optional(),
      unidade: z.number().optional(),
      peso: z.number().optional()
    })
  )
})

export type ParamsSchema = z.infer<typeof countedTypeSchema>
