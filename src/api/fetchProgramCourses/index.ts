import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'
import { IFetchProgramCourses } from './types'

export const fetchProgramCourses = async () => {
  const query = qs.stringify({
      fields: [
          'title',
          'hoursTraining',
          'monthsTraining',
          'curatorSupport',
          'remotely',
          'popularCourses',
          'popularCourses',
          'description',
          'price',
          'discount',
        'slug'
      ],
      populate: {
          faculty: {
              fields: ['title'],
          },
          typeProgram: {
              fields: ['title'],
          },
          image:{
              fields: ['url'],
          },
      }
  })
  const res = await fetcherGet<IFetchProgramCourses>(`${routesBack.newRoot}${'/api/program-courses'}?${query}`)

  return res?.data || []
}

export default fetchProgramCourses
