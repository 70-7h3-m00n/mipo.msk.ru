export interface IFetchFaculty {
  data: Array<IFaculty>;
  meta: IMeta;
}

export interface IFaculty {
  id: number;
  title: string;
  slug: string;
  image: Array<IImage>;
  icon: Array<IImage>;
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
