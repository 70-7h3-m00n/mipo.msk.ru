import qs from 'qs'
import fetcherGet from '../../helpers/fetcherGet'
import routesBack from '../../config/routesBack'
import { IFetchTeacher } from './types'

export const fetchTeacher = async () => {
  const query = qs.stringify({
    fields: [
      'name',
      'description'
    ],
    populate: {
      image:{
        fields: ['url'],
      },
    }
  })
  const res = await fetcherGet<IFetchTeacher>(`${routesBack.newRoot}${'/api/teachers'}?${query}`)

  return res?.data || []
}

export default fetchTeacher
