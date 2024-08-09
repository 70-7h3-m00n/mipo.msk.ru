export interface IFetchTrustTraining {
  data: Array<ITrustTraining>;
  meta: IMeta;
}

export interface ITrustTraining {
  id: number;
  image: Array<IImage>;
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
