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
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

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
    slidesNum: altStyles ? 1 : 1.75,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: altStyles ? 20 : 40
  }

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
          Преподаватели программы
        </h2>
        <p className={cn(stls.desc, { [stls.altStyles]: altStyles })}>
          Преподают ведущие практикующие специалисты{' '}
          <span className={cn(stls.highlight, { [stls.altStyles]: altStyles })}>
            с опытом от 7 до 25 лет
          </span>
        </p>
        <div className={cn(stls.teachers, { [stls.altStyles]: altStyles })}>
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
