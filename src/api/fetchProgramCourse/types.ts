export interface IFetchProgramCourse {
    data: IProgramCourse[]
    meta: IMeta
}
export interface IProgramCourse {
    title: string
    description: string
    hoursTraining: string
    monthsTraining: string
    image: IImage
    subDescription: string
    discount: number
    price: number
    slug: string
    typeProgram: {
        title: string
    }
    learningProfessions: {
        id: number
        header: string
        description: string
        image: IImage
    }[]
    courseFor: {
        id: number
        header: string
        description: string
    }[]
    youWillLearn: {
        id: number
        item: string
    }[]
    undergoingTraining: {
        id: number
        item: string
    }[]
    courseProgram: {
        numberLessons: string
        titleModule: string
        listThemes: {
          item: string
        }[]
    }[]
    descriptionModule: string
    mentors: {
        name: string
        description: string
        image: IImage
    }[]
    portfolio: {
        profession: string
        cost: string
        description: string
        skills: {
            item: string
        }[]
        image: IImage
    }
    paymentTerms: {
        cost: string
        discount: string
        list: {
            item: string
        }[]
    }
    studentComment: {
        name: string
        description: string
        data: string
        image: IImage
    }[]
    faq: {
        question: string
        answer: string
    }[]
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
