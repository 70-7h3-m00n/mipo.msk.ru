export interface ICoursePath {
  data: Datum[]
}

interface Datum {
  id: number
  attributes: {
    slug: string
  }
}
