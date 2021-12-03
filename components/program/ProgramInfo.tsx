import stls from '@/styles/components/program/ProgramInfo.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendar,
  IconGraduateHat,
  IconPaperScroll,
  IconClock
} from '@/components/icons'

const ProgramInfo = () => {
  const {
    program: { studyHours, study_form, studyMounthsDuration }
  } = useContext(ProgramContext)

  const vals = [
    {
      key: 'Зачисление:',
      val: <ProgramAdmission />,
      icon: <IconPaperScroll />
    },
    {
      key: 'Количество часов:',
      val: `${studyHours} ч`,
      icon: <IconClock />
    },
    {
      key: 'Форма обучения:',
      val: study_form && study_form.label,
      icon: <IconGraduateHat />
    },
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />,
      icon: <IconCalendar />
    }
  ]

  return (
    <div className={stls.container}>
      {vals.map(({ key, val, icon }, idx) => (
        <div key={key + val + idx} className={stls.group}>
          <div className={stls.icon}>{icon}</div>
          <div>
            <p className={stls.key}>{key}</p>
            <p className={stls.val}>{val}</p>
          </div>
          <div className={stls.divider}></div>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfo
