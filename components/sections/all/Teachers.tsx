import stls from '@/styles/components/sections/all/Teachers.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import PopupTrigger from '@/components/general/PopupTrigger'
import SwiperContainer from '@/components/general/SwiperContainer'
import Wrapper from '@/components/layout/Wrapper'
import CardTeacher from '@/components/cards/CardTeacher'
import { ImgTeacher } from '@/components/imgs'

const Teachers = () => {

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <h2 className={cn(stls.title)}>
          Преподаватели программы
        </h2>
        <p className={cn(stls.desc)}>
          Преподают ведущие практикующие специалисты{' '}
          <span className={cn(stls.highlight)}>
            с опытом от 7 до 25 лет
          </span>
        </p>
        <div className={cn(stls.teachers)}>
          <SwiperContainer
            teachers
            alwaysDisabledOnDesktop
            isMultiRow
          />
        </div>
        <div className={stls.btnContainer}>
          <PopupTrigger btn='delta' cta='learnAboutTeachers' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
