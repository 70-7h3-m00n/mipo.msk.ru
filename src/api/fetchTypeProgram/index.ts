import qs from 'qs'
import fetcherGet from '../../helpers/fetcherGet'
import routesBack from '../../config/routesBack'
import { IFetchTypeProgram } from './types'

export const fetchTypeProgram = async () => {
  const query = qs.stringify({
    fields: [
      'title',
      'slug'
    ]
  })
  const res = await fetcherGet<IFetchTypeProgram>(`${routesBack.newRoot}${'/api/type-programs'}?${query}`)

  return res?.data || []
}

export default fetchTypeProgram
