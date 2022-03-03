import stls from '@/styles/components/cards/CardStudyField.module.sass'
import Link from 'next/link'
import {
  routeProfessions,
  routeCourses,
  routePrograms,
  routeMBA
} from '@/data/routes'
import classNames from 'classnames'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { IconArrowRight } from '@/components/icons'
import { TypeCategory } from '@/types/index'

type TypeCardStudyField = {
  studyField: any
  type?: TypeCategory
}

const CardStudyField = ({ studyField = null, type }: TypeCardStudyField) => {
  return (
    <Link
      href={`${
        type === 'profession'
          ? routeProfessions
          : type === 'course'
          ? routeCourses
          : type === 'mba'
          ? routeMBA
          : routePrograms
      }/${studyField.slug}`}>
      <a className={stls.container}>
        <h4 className={stls.title}>{studyField.label}</h4>
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardStudyField
