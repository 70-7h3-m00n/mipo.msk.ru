export interface IFetchTeacher {
  data: Array<ITeacher>;
  meta: IMeta;
}

export interface ITeacher {
  id: number;
  name: string;
  description: string;
  image: IImage;
}

export interface IImage {
  id: number;
  url: string;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
