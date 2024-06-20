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


  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Преподаватели программы</h2>
        <p className={stls.subtitle}>
          Преподают ведущие российские и зарубежные эксперты{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>

        <div className={stls.btnContainer}>
          <PopupTrigger btn='delta' cta='learnAboutTeachers' />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionGeneralTeachersAlt
