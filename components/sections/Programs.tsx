import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  ProgramsProfessions,
  ProgramsCourses,
  ProgramsMbas
} from '@/components/programs'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import { routeCourses, routeMBA, routeProfessions } from '@/data/routes'
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
    curProgramsStudyFieldSlug,
    filteredPrograms,
    searchTerm
  } = useContext(ProgramsContext)

  const router = useRouter()

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

  if (atIndex) {
    data.courses = data.courses.filter((item, idx) => idx < 8)
    data.professions = data.professions.filter((item, idx) => idx < 8)
    data.mbas = data.mbas.filter((item, idx) => idx < 8)
  }

  // useEffect(() => {
  //   ofType === 'course' &&
  //     data.courses.length === 0 &&
  //     router.replace(routeCourses)
  //   ofType === 'profession' &&
  //     data.professions.length === 0 &&
  //     router.replace(routeProfessions)
  //   ofType === 'mba' && data.mbas.length === 0 && router.replace(routeMBA)
  // }, [])

  const filteredProgramsIds = filteredPrograms.map(item => item.id)

  const filteredData = {
    courses: data.courses.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    }),
    professions: data.professions.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    }),
    mbas: data.mbas.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    })
  }

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.withFilters]: withFilters
      })}>
      <Wrapper>
        {withFilters && (
          <div className={stls.filters}>
            <ProgramsFilters ofType={ofType} />
          </div>
        )}
        <div className={stls.content}>
          {withTitle && <h2 className={stls.title}>Наши направления</h2>}
          <div className={stls.programs}>
            {ofType === 'profession' &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <ProgramsProfessions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {ofType === 'course' &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <ProgramsCourses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {ofType === 'mba' &&
              (searchTerm
                ? filteredData.mbas && filteredData.mbas.length > 0
                : data.mbas && data.mbas.length > 0) && (
                <div className={stls.mbas}>
                  <ProgramsMbas
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    mbas={searchTerm ? filteredData.mbas : data.mbas}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <ProgramsProfessions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <ProgramsCourses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {!ofType &&
              (searchTerm
                ? filteredData.mbas && filteredData.mbas.length > 0
                : data.mbas && data.mbas.length > 0) && (
                <div className={stls.mbas}>
                  <ProgramsMbas
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    mbas={searchTerm ? filteredData.mbas : data.mbas}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {searchTerm &&
              filteredData.courses.length === 0 &&
              filteredData.professions.length === 0 &&
              filteredData.mbas.length === 0 && (
                <>Кажется, что по вашему запросу ничего не нашлось</>
              )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
