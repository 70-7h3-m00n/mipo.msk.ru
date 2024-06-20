import { routesBack } from '@/config/index'
import { filterProgramsByType } from '@/helpers/index'
import { TypeCategory } from '@/types/index'

type ProgramsType = {
  ofType: TypeCategory
}

// @ts-ignore
const fetchProgramsPaths = async ({ ofType }: ProgramsType = { ofType: null }
) => {
  const res = await fetch(`${routesBack.root}${routesBack.programs}`)
  const data = await res.json()

  let programs

  if (ofType) {
    programs = filterProgramsByType({ programs: data, type: ofType })
  } else {
    programs = data
  }

  const paths = programs.map((program: any) => ({
    params: { studyFieldSlug: program.study_field?.slug || 'studyfield' }
  }))

  return paths
}

export default fetchProgramsPaths
