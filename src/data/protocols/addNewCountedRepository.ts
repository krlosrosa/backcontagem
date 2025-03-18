export interface AddNewCountedRepository {
  add: (params: AddNewCountedRepository.Params) => Promise<AddNewCountedRepository.Result>
}

export namespace AddNewCountedRepository {
  export type Params = {
    params: items[]
  }
  export type Result = boolean
}

type items = {
  id?: number
  data: string
  endereco: string
  lote?: string
  sku?: string
  caixa?: number
  unidade?: number
  peso?: number
}
