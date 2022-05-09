import stls from '@/styles/components/sections/Teachers.module.sass'
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
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  console.log(program.teachers)

  const list =
    program?.teachers &&
    program?.teachers?.map(teacher => {
      teacher.image = (
        <ImgTeacher
          src={teacher?.portrait?.url}
          alt={teacher?.name}
          width={teacher?.portrait?.width && 160}
          height={getImageHeight({
            width: 160,
            widthInitial: teacher?.portrait?.width,
            heightInitial: teacher?.portrait?.height
          })}
        />
      )
      return teacher
    })

  const teachersSlides =
    list &&
    list.map((teacher, idx) => (
      <CardTeacher
        key={teacher?.name + idx}
        portrait={teacher?.image}
        name={teacher?.name}
        specialization={teacher?.specialization}
        achievements={teacher?.achievements}
      />
    ))

  const mobileSwiperOptions = {
    slidesNum: atMba ? 1 : 1.75,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: atMba ? 20 : 40
  }

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
          Преподаватели программы
        </h2>
        <p className={cn(stls.desc, { [stls.atMba]: atMba })}>
          Преподают ведущие практикующие специалисты{' '}
          <span className={cn(stls.highlight, { [stls.atMba]: atMba })}>
            с опытом от 7 до 25 лет
          </span>
        </p>
        <div className={cn(stls.teachers, { [stls.atMba]: atMba })}>
          <SwiperContainer
            teachers
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
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
