import qs from 'qs'
import fetcherGet from '../../helpers/fetcherGet'
import routesBack from '../../config/routesBack'
import { IFetchFaq } from './types'


export const fetchFaq= async () => {
  const query = qs.stringify({
    fields: [
      'question',
      'answer'
    ],
  })
  const res = await fetcherGet<IFetchFaq>(`${routesBack.newRoot}${'/api/faqs'}?${query}`)

  return res?.data || []
}

export default fetchFaq
