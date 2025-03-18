export type validationParamsType = {
  validate: boolean
  error: string
}

export interface ValidatorParams {
  validate: (params: any) => Promise<validationParamsType>
}
