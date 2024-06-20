import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'
import { TypeCategory } from '@/types/index'

type getProgramKey = TypeCategory | ''

type getProgramType = {
  data: [{ [key: string]: any; type: getProgramKey }]
  ofType: TypeCategory
  slug: string
}

const getProgram = ({ data, ofType, slug }: getProgramType) => {
  const programs = filterProgramsByType({ programs: data, type: ofType })
  const program = null

  return program
}

export default getProgram
