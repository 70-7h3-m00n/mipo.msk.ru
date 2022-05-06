import stls from '@/styles/components/program/ProgramInfoAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendar,
  IconGeneralCalendarAlt,
  IconGeneralUsers,
  IconGeneralMap,
  IconGeneralDocument,
  IconGeneralClockAlt,
  IconGraduateHat,
  IconPaperScroll,
  IconClock,
  IconDoc
} from '@/components/icons'

type TProgramInfoAltProps = TPropClassNames

const ProgramInfoAlt: FC<TProgramInfoAltProps> = ({ classNames }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'
  const atCourse = program?.category?.type === 'course'

  const vals = [
    {
      key: 'Срок обучения:',
      val: (
        <ProgramStudyDuration
          studyMonthsDuration={
            program?.timenprice && program?.timenprice?.[0]?.studyMonthsDuration
          }
        />
      ),
      icon: IconGeneralCalendarAlt
    },
    {
      key: 'Форма обучения:',
      val: program?.study_form && program?.study_form?.label,
      icon: IconGeneralUsers
    },
    {
      key: 'Ближайшее зачисление:',
      val: <ProgramAdmission />,
      icon: IconGeneralMap
    },
    {
      key: 'Количество часов:',
      val: `${program?.timenprice && program?.timenprice?.[0]?.studyHours} ч`,
      icon: IconGeneralClockAlt
    },
    {
      key: 'Документ об окончании:',
      val: atCourse ? 'Сертификат' : 'Диплом о переподготовке',
      icon: IconGeneralDocument
    }
  ]

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {vals.map(({ key, val, icon: Icon }, idx) => (
        <div key={key + val + idx} className={stls.group}>
          <div className={stls.icon}>
            {<Icon color={atMba ? colors['nu-2'] : undefined} />}
          </div>
          <div>
            <p className={stls.key}>{key}</p>
            <p className={stls.val}>{val}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfoAlt
