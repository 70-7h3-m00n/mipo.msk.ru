import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import { ICoursePath } from './types'
import routesBack from '@/config/routesBack'

export const fetchPathsCourses = async () => {
  const query = qs.stringify({
    fields: ['slug'],
  })

  const res = await fetcherGet<ICoursePath>(`${routesBack.newRoot}${'/api/courses'}?${query}`)

  return res?.data.map(item => ({
    params: {
      newCourse: item.attributes.slug,
    },
  })) || []
}

export default fetchPathsCourses
