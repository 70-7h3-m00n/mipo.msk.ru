import { routesBack } from '@/config/index'
import { convertMdToHtml } from '@/helpers/index'

const fetchTeachers = async () => {
  const res = await fetch(`${routesBack.root}${routesBack.teachers}`)
  const data = await res.json()
  const teachers = null

  return teachers
}

export default fetchTeachers
