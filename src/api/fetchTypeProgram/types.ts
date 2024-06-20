export interface IFetchTypeProgram {
  data: ITypeProgram[]
  meta: IMeta
}

export interface ITypeProgram {
  title: string
  slug: string
}

export interface IMeta {
  pagination: IPagination
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
