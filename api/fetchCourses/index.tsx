import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'

export const fetchPathsCourses = async () => {
  const res = await fetcherGet<any>(`${routesBack.newRoot}${'/api/courses'}`)

  return res?.data || []
}

export default fetchPathsCourses
