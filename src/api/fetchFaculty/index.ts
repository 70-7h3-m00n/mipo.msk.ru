import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'
import { IFetchFaculty } from './type'

export const fetchFaculty = async () => {
  const query = qs.stringify({
    fields: [
      'title',
      'slug'
    ],
    populate: {
      image:{
        fields: ['url'],
      },
      icon:{
        fields: ['url'],
      },
    }
  })
  const res = await fetcherGet<IFetchFaculty>(`${routesBack.newRoot}${'/api/faculties'}?${query}`)

  return res?.data || []
}

export default fetchFaculty
