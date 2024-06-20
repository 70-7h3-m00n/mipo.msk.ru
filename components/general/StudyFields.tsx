import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { BtnField } from '@/components/btns'
import {
  routePrograms,
  routeCourses,
  routeProfessions,
  routeMBA
} from '@/data/routes'
import classNames from 'classnames'
import { TypeCategory } from '@/types/index'

type StudyFieldsType = {
  aside?: boolean
  ofType?: TypeCategory | any
  close?: any
}

const StudyFields = ({
  aside = false,
  ofType = null,
  close = null
}: StudyFieldsType) => {
  const {
    studyFields,
    studyFieldsCourses,
    studyFieldsProfessions,
    studyFieldsMbas,
    curProgramsType
  } = useContext(ProgramsContext)

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : ofType === 'mba'
      ? studyFieldsMbas
      : studyFields
  return (
    <ul
      className={classNames({
        [stls.container]: true,
        [stls.aside]: aside,
        [stls.tooltip]: !aside
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          {idx === 0 && (
            <li className={stls.studyField} onClick={close && close}>
              <BtnField
                href={
                  aside
                    ? curProgramsType === 'course'
                      ? routeCourses
                      : curProgramsType === 'profession'
                      ? routeProfessions
                      : curProgramsType === 'mba'
                      ? routeMBA
                      : routePrograms
                    : routePrograms
                }
                aside={aside}>
                Все направления
              </BtnField>
            </li>
          )}
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              href={`${
                aside
                  ? curProgramsType === 'course'
                    ? routeCourses
                    : curProgramsType === 'profession'
                    ? routeProfessions
                    : curProgramsType === 'mba'
                    ? routeMBA
                    : routePrograms
                  : routePrograms
              }/${slug}`}
              aside={aside}
              slug={slug}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFields
