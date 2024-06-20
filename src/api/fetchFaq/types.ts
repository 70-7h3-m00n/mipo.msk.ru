export interface IFetchFaq {
  data: ITeacher[]
  meta: IMeta
}

export interface ITeacher {
  id: number
  question: string
  answer: string
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
