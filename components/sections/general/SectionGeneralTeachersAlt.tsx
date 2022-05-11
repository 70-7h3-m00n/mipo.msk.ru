import stls from '@/styles/components/sections/general/SectionGeneralTeachersAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgTeacher } from '@/components/imgs'

type TSectionGeneralTeachersAlt = TPropClassNames

const SectionGeneralTeachersAlt: FC<TSectionGeneralTeachersAlt> = ({
  classNames
}) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

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

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Преподаватели программы</h2>
        <p className={stls.subtitle}>
          Преподают ведущие практикующие психологи и психоаналитики России с{' '}
          <span className={stls.highlight}>опытом от 7 до 25 лет</span>
        </p>
        <ul className={stls.teachers}>
          {teachers?.map((teacher, idx) => (
            <li className={stls.teacherItem} key={`${teacher?.name}-${idx}`}>
              <div className={stls.teacherItemBody}>
                <div className={stls.laptopDesktop}>{teacher.img}</div>
                <div className={stls.right}>
                  <div className={stls.top}>
                    <div className={stls.phoneTablet}>{teacher.img}</div>
                    <div>
                      <h3 className={stls.name}>{teacher?.name}</h3>
                      {teacher?.specialization && (
                        <p className={stls.specialization}>
                          {teacher?.specialization}
                        </p>
                      )}
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
          <PopupTrigger btn='delta' cta='learnAboutTeachers' />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionGeneralTeachersAlt
