import stls from '@/styles/components/sections/Teachers.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardTeacher from '@/components/cards/CardTeacher'
import BtnDelta from '@/components/btns/BtnDelta'
import { ImgTeacher, ImgTeacher1 } from '@/components/imgs'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import PopupTrigger from '@/components/general/PopupTrigger'

const Teachers = () => {
  const {
    program: { teachers }
  } = useContext(ProgramContext)

  const list =
    teachers &&
    teachers.map(teacher => {
      teacher.image = (
        <ImgTeacher
          src={
            teacher.portrait?.formats?.small?.url ||
            teacher.portrait?.formats?.thumbnail?.url
          }
          alt={teacher.name}
          width={
            teacher.portrait?.formats?.small?.width ||
            teacher.portrait?.formats?.thumbnail?.width
          }
          height={
            teacher.portrait?.formats?.small?.height ||
            teacher.portrait?.formats?.thumbnail?.height
          }
        />
      )
      // <ImgTeacher1 name='Иванов Иван Иванович' />
      // item.formats.small.url
      return teacher
    })

  const teachersSlides =
    list &&
    list.map((teacher, idx) => (
      <CardTeacher
        key={teacher.name + idx}
        portrait={teacher.image}
        name={teacher.name}
        specialization={teacher.specialization}
        achievements={teacher.achievements}
      />
    ))

  const mobileSwiperOptions = {
    slidesNum: 1.75,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 40
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преподаватели программы</h2>
        <p className={stls.desc}>
          Преподают ведущие практикующие психологи и психоаналитики России{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
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
