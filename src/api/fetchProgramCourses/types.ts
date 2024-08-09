export interface IFetchProgramCourses {
  data: Array<IProgramCourses>;
  meta: IMeta;
}
export interface IProgramCourses {
  title: string;
  description: string;
  hoursTraining: string;
  monthsTraining: string;
  curatorSupport: boolean;
  remotely: boolean;
  image: IImage;
  popularCourses: boolean;
  subDescription: string;
  discount: number;
  price: number;
  slug: string;
  faculty: {
    id: number;
    title: string;
  };
  typeProgram: {
    id: number;
    title: string;
  };
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
