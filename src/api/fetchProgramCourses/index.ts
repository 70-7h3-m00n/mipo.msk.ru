import qs from 'qs'
import fetcherGet from '@/helpers/fetcherGet'
import routesBack from '@/config/routesBack'

export const fetchProgramCourses = async () => {
  const query = qs.stringify({
    fields: [
      'title'
    ],
    populate: {
      faculty: {
        fields: ['title'],
      },
      type_programs: {
        fields: ['title'],
      },
      image:{
        fields: ['url'],
      },

      // listHeader: {
      //   fields: ['item'],
      // },
      // descriptionProgram: {
      //   populate: {
      //     image: {
      //       fields: ['url'],
      //     },
      //   },
      // }
    }
  })
  const res = await fetcherGet<any>(`${routesBack.newRoot}${'/api/program-courses'}?${query}`)

  return res?.data || null
}

export default fetchProgramCourses
