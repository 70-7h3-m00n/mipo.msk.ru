
export interface IFetchFaculty {
  data: IFaculty[]
  meta: IMeta
}

export interface IFaculty {
  id: number
  title: string
  slug: string
  image : IImage[]
  icon: IImage[]
}

export interface IImage {
  id: number
  url: string
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