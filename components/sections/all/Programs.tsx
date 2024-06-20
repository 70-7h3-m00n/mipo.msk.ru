import stls from '@/styles/components/sections/all/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  ProgramsProfessions,
  ProgramsCourses,
  ProgramsMbas
} from '@/components/programs'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import classNames from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import { TypeCategory } from '@/types/index'

type ProgramsType = {
  ofType?: TypeCategory
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  withFilters?: boolean
  atIndex?: boolean
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  withFilters = false,
  atIndex = false
}: ProgramsType) => {
  const {
    courses,
    professions,
    mbas,
    newCourse,
    curProgramsStudyFieldSlug,
    filteredPrograms,
    searchTerm
  } = useContext(ProgramsContext)
  const coursesFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: courses,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const professionsFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: professions,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const mbasFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: mbas,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const data = {
    courses: curProgramsStudyFieldSlug ? coursesFiltered : courses,
    professions: curProgramsStudyFieldSlug ? professionsFiltered : professions,
    mbas: curProgramsStudyFieldSlug ? mbasFiltered : mbas
  }


  const filteredProgramsIds: any = filteredPrograms.map((item: any) => item.id)

  const filteredData = {

  }

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.withFilters]: withFilters
      })}>
    </section>
  )
}

export default Programs
