import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import { ICourseData } from './types'
import routesBack from '@/config/routesBack'

export const fetchCourse = async (slug: string) => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: [
      'category',
      'nameCourse',
      'description',
      'slug',
      'watchProgram',
      'businessCase',
      'profession',
      'salary',
      'trainingMonths',
      'enrollment',
      'formOfStudy',
      'installmentPlan',
      'oneTimePayment',
      'priseSmart',
      'prisePro',
      'lessonProCounter',
      'lessonSmartCounter',
      'classProCounter',
      'classSmartCounter',
      'textSmart',
      'textPro'
    ],
    populate: {
      imageCourse:{
        fields: ['url'],
      },
      listHeader: {
        fields: ['item'],
      },
      listTrainingInfo: {
        fields: [
          'trainingPeriod',
          'formOfStudy',
          'nextEnrollment',
          'numberHours',
          'certificateCompletion'
        ],
      },
      descriptionProgram: {
        fields: [
          'header',
          'subHeader',
          'tittle',
          'description',
        ],
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      vacanciesProfession: {
        fields: ['header', 'description'],
        populate: {
          listVacancies: {
            fields: ['header', 'description'],
          },
          listSalary: {
            fields: ['header', 'description'],
          }
        },
      },
      whoIsProgram: {
        fields: ['title', 'description'],
        populate: {
          icon: {
            fields: ['url'],
          },
        },
      },
      listStudy: {
        fields: ['title', 'description'],
      },
      listStudyPro: {
        fields: ['title'],
      },
      trainingProgram: {
        fields: ['pro', 'title'],
        populate: {
          list:{
            fields: ['item'],
          }
        }
      },
      listTeachers: {
        fields: ['title', 'subTitle', 'description'],
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      listProfessionalSkills: {
        fields: ['title'],
      },
      listCompany: {
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      listProgram: {
        fields: ['title'],
      }
    }
  })
  const res = await fetcherGet<any>(`${routesBack.newRoot}${'/api/courses'}?${query}`)

  return res?.data[0]?.attributes || null
}

export default fetchCourse
