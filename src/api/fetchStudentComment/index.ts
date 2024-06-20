import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'
import { IFetchStudentComment } from './types'

export const fetchStudentComment = async () => {
  const query = qs.stringify({
    fields: [
      'name',
      'description',
      'data'
    ],
    populate: {
      image:{
        fields: ['url'],
      },
    }
  })
  const res = await fetcherGet<IFetchStudentComment>(`${routesBack.newRoot}${'/api/student-comments'}?${query}`)

  return res?.data || []
}

export default fetchStudentComment
