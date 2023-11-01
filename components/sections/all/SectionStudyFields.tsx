import stls from '@/styles/components/sections/all/SectionStudyFields.module.sass'
import { TypeCategory } from '@/types/index'
import Wrapper from '@/components/layout/Wrapper'
import {
  ProgramsProfessions,
  ProgramsCourses,
  ProgramsMbas
} from '@/components/programs'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import {
  routeCourses,
  routeMBA,
  routeProfessions,
  routePrograms
} from '@/data/routes'
import { ProgramsQty } from '@/components/general'
import { CardStudyField } from '@/components/cards'
import { BtnDelta } from '../../btns'

type SectionStudyFieldsType = {
  ofType?: TypeCategory
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  atIndex?: boolean
}

const SectionStudyFields = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  atIndex = false
}: SectionStudyFieldsType) => {
  const {
    courses,
    professions,
    mbas,
    curProgramsStudyFieldSlug,
    filteredPrograms,
    searchTerm,
    studyFields,
    studyFieldsProfessions,
    studyFieldsCourses,
    studyFieldsMbas
  } = useContext(ProgramsContext)

  const router = useRouter()

  const list: {
    title: string
    type: TypeCategory
    studyFields: typeof studyFields
  }[] = [
    {
      title: 'Профессиональная переподготовка',
      type: 'profession',
      studyFields: studyFieldsProfessions
    },
    {
      title: 'Повышение квалификации',
      type: 'course',
      studyFields: studyFieldsCourses
    },
    {
      title: 'MBA',
      type: 'mba',
      studyFields: studyFieldsMbas
    }
  ]

  return (
    <section
      className={classNames({
        [stls.container]: true
      })}>
      <Wrapper>
        <div className={stls.content}>
          {withTitle && <h2 className={stls.title}>Наши направления</h2>}
          <ul className={stls.list}>
            {list
              .filter(item => item.studyFields.length > 0)
              .map((item, idx) => (
                <li key={`${item.title}-${idx}`} className={stls.listItem}>
                  <div className={stls.heading}>
                    <h3 className={stls.subtitle}>{item.title}</h3>
                    <ProgramsQty qty={item.studyFields.length} studyFields />
                  </div>
                  <ul className={stls.studyFields}>
                    {item.studyFields
                      .filter((field, idx) => idx < 8)
                      .map((studyField, idx) => (
                        <li
                          key={`${
                            studyField.label || 'studyFieldsItem'
                          }-${idx}`}
                          className={stls.studyField}>
                          <CardStudyField
                            type={item.type}
                            studyField={studyField}
                          />
                        </li>
                      ))}
                  </ul>
                  {withBtn && (
                    <div className={stls.btn}>
                      <BtnDelta
                        text={`Смотреть все направления`}
                        href={
                          item.type === 'course'
                            ? routeCourses
                            : item.type === 'profession'
                            ? routeProfessions
                            : item.type === 'mba'
                            ? routeMBA
                            : routePrograms
                        }
                      />
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionStudyFields
