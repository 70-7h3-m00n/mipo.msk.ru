export interface IFetchWebinars {
  data: Array<IWebinars>;
  meta: IMeta;
}

export interface IWebinars {
  id: number;
  title: string;
  slug: string;
  dataPlay: string;
  speaker: string;
  faculty: {
    title: string;
  };
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
