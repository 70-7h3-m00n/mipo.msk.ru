import stls from '@/styles/components/sections/all/StudyCost.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnEta, BtnGamma, BtnText } from '@/components/btns'
import { IconCircleCheck } from '@/components/icons'
import PopupTrigger from '@/components/general/PopupTrigger'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { number } from '@/data/contact'

const StudyCost = () => {


  const testimonials = [
    {
      title: 'Готовые знания + Официальный документ',
      content: (
        <>
          Смотрите лекции, выполняйте практические задания, получайте официальные документы по завершению курса.
        </>
      )
    },
    {
      title: 'Сэкономьте 13%',
      content: (
        <>
          Получите налоговый вычет. <br /> Все подробности у менеджера при
          записи на курс
        </>
      )
    }
  ]

  return (
    <></>
  )
}

export default StudyCost
