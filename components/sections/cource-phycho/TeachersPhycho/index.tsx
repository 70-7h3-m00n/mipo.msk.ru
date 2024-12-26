import stls from './index.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useContext, useRef, useState } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgTeacher } from '@/components/imgs'
import Title from '@/components/parts/Title'
import { IconGeneralArrowRightAlt } from '@/components/icons'
import IconGeneralArrowLeftPurple from '@/components/icons/general/IconGeneralArrowLeftPurple'

type TSectionGeneralTeachersAlt = TPropClassNames

const TeachersPhycho: FC<TSectionGeneralTeachersAlt> = ({ classNames }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const teachers = program?.teachers
    ?.filter((_, idx) => idx < 6)
    .map(teacher => ({
      ...teacher,
      img: (
        <ImgTeacher
          src={teacher?.portrait?.url}
          alt={teacher?.name}
          width={teacher?.portrait?.width && 147}
          height={getImageHeight({
            width: 147,
            widthInitial: teacher?.portrait?.width,
            heightInitial: teacher?.portrait?.height
          })}
          classNames={[stls.img]}
        />
      )
    }))

  const [countSlider, setCountSlider] = useState<number>(0)
  const teachersRefs = useRef<(HTMLLIElement | null)[]>([])
  
  const checkVisibility = () => {

  }

  const scrollToTeacher = (index: number) => {
    teachersRefs.current[index]?.scrollIntoView({
      behavior: 'smooth', 
      block: 'nearest',
      inline: 'start' 
    })
  }

  const nextSlide = () => {
    setCountSlider(prev => {
      const nextIndex = (prev + 1) % teachers.length
      scrollToTeacher(countSlider + 1)
      return nextIndex
    })
    
  }

  const prevSlide = () => {
    setCountSlider(prev => {
      const prevIndex = (prev - 1 + teachers.length) % teachers.length
      scrollToTeacher(countSlider - 1)
      return prevIndex
    })
  }

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      } id='teachers'>
      <Wrapper classNames={[stls.wrapper]}>
        <Title>Преподаватели программы</Title>

        <p className={stls.subtitle}>
          Преподают ведущие российские и зарубежные эксперты{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
      </Wrapper>
      <ul className={stls.teachers}>
        {teachers?.map((teacher, idx) => (
          <li
            className={stls.teacherItem}
            key={`${teacher?.name}-${idx}`}
            ref={el => (teachersRefs.current[idx] = el)}>
            <div className={stls.teacherItemBody}>
              <div className={stls.laptopDesktop}>{teacher.img}</div>
              <div className={stls.right}>
                <div className={stls.top}>
                  <div className={stls.phoneTablet}>{teacher.img}</div>
                  <div className={stls.nameSpecializationContainer}>
                    <h3 className={stls.name}>{teacher?.name}</h3>
                    <p className={stls.specialization}>
                      {teacher?.specialization || program?.title}
                    </p>
                  </div>
                </div>
                {teacher?.achievements && (
                  <p className={stls.achievements}>{teacher?.achievements}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={stls.btnContainer}>
        <div onClick={prevSlide} className={stls.leftArrow}>
          <IconGeneralArrowLeftPurple />
        </div>
        <div onClick={nextSlide} className={stls.rightArrow}>
          <IconGeneralArrowLeftPurple />
        </div>
      </div>
    </section>
  )
}

export default TeachersPhycho
