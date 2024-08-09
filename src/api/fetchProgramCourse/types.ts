export interface IFetchProgramCourse {
  data: Array<IProgramCourse>;
  meta: IMeta;
}
export interface IProgramCourse {
  title: string;
  description: string;
  hoursTraining: string;
  monthsTraining: string;
  image: IImage;
  subDescription: string;
  discount: number;
  price: number;
  slug: string;
  typeProgram: {
    title: string;
  };
  learningProfessions: Array<{
    id: number;
    header: string;
    description: string;
    image: IImage;
  }>;
  courseFor: Array<{
    id: number;
    header: string;
    description: string;
  }>;
  youWillLearn: Array<{
    id: number;
    item: string;
  }>;
  undergoingTraining: Array<{
    id: number;
    item: string;
  }>;
  courseProgram: Array<{
    numberLessons: string;
    titleModule: string;
    listThemes: Array<{
      item: string;
    }>;
  }>;
  descriptionModule: string;
  mentors: Array<{
    name: string;
    description: string;
    image: IImage;
  }>;
  portfolio: {
    profession: string;
    cost: string;
    description: string;
    skills: Array<{
      item: string;
    }>;
    image: IImage;
  };
  paymentTerms: {
    cost: string;
    discount: string;
    list: Array<{
      item: string;
    }>;
  };
  studentComment: Array<{
    name: string;
    description: string;
    data: string;
    image: IImage;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
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
