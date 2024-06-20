export interface IFetchStudentComment {
  data: IStudentComment[]
  meta: IMeta
}

export interface IStudentComment {
  name: string
  description: string
  data: string
  image: IImage
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
