import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'
import { IFetchProgramCourse, IProgramCourse } from './types'

export const fetchProgramCourse = async (slug: string): Promise<IProgramCourse | null> => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: [
      'title',
      'hoursTraining',
      'monthsTraining',
      'description',
      'price',
      'discount',
      'descriptionModule'
    ],
    populate: {
      image:{
        fields: ['url'],
      },
      typeProgram: {
        fields: ['title'],
      },
      learningProfessions: {
        fields: ['header', 'description'],
        populate: {
          image:{
            fields: ['url'],
          },
        }
      },
      courseFor: {
        fields: ['header', 'description'],
      },
      youWillLearn: {
        fields: ['item'],
      },
      undergoingTraining: {
        fields: ['item'],
      },
      courseProgram: {
        fields: ['numberLessons', 'titleModule'],
        populate: {
          listThemes: {
            fields: ['item'],
          }
        }
      },
      mentors: {
        fields: ['name', 'description'],
        populate: {
          image:{
            fields: ['url'],
          },
        }
      },
      portfolio: {
        fields: ['profession', 'cost', 'description'],
        populate: {
          skills :{
            fields: ['item'],
          },
          image: {
            fields: ['url'],
          }
        }
      },
      paymentTerms: {
        fields: ['cost', 'discount'],
        populate: {
          list :{
            fields: ['item'],
          },
        }
      },
      studentComment: {
        fields: ['name', 'description', 'data'],
        populate: {
          image :{
            fields: ['url'],
          },
        }
      },
      faq: {
        fields: ['question', 'answer'],
      }
    }
  })

  const res = await fetcherGet<IFetchProgramCourse>(`${routesBack.newRoot}${'/api/program-courses'}?${query}`)

  return res?.data[0] || null
}

export default fetchProgramCourse
