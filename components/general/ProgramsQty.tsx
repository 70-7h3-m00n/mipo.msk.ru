import stls from '@/styles/components/general/ProgramsQty.module.sass'
import {
  getCasesRuCourseString,
  getCasesRuProfessionString,
  getCasesRuStudyFieldString
} from '@/helpers/index'
import classNames from 'classnames'
import { TypeCategory } from '@/types/index'

type ProgramsQtuType = {
  qty: number
  ofType?: TypeCategory
  dye?: string
  studyFields?: boolean
}

const ProgramsQty = ({
  qty = 0,
  ofType,
  dye = 'bgbeta',
  studyFields
}: ProgramsQtuType) => {
  const label = studyFields
    ? getCasesRuStudyFieldString(qty)
    : ofType === 'profession'
    ? getCasesRuProfessionString(qty)
    : ofType === 'course'
    ? getCasesRuCourseString(qty)
    : ofType === 'mba'
    ? 'Программ'
    : 'Программ'

  return (
    <div className={stls.container}>
      <div className={classNames({ [stls.qty]: true, [stls[dye]]: true })}>
        {qty}
      </div>{' '}
      <span className={stls.text}>{label}</span>
    </div>
  )
}

export default ProgramsQty
