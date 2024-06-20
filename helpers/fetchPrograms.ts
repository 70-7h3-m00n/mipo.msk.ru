import { routesBack } from '@/config/index'
import { TypeCategory } from '@/types/index'

type ProgramsType = {
  ofType: TypeCategory
}

// @ts-ignore
const fetchPrograms = async ({ ofType }: ProgramsType = { ofType: null }) => {
  const res = await fetch(`${routesBack.root}${routesBack.programs}`)
}

export default fetchPrograms
