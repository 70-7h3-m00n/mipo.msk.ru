import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'
import { IFetchTrustTraining } from './types'

export const fetchTrustTraining = async () => {
  const query = qs.stringify({
    populate: {
      image:{
        fields: ['url'],
      },
    }
  })
  const res = await fetcherGet<IFetchTrustTraining>(`${routesBack.newRoot}${'/api/trust-trainings'}?${query}`)

  return res?.data || []
}

export default fetchTrustTraining
