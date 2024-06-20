import stls from '@/styles/components/sections/general/SectionInternationalExperts.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import ProgramContext from '@/context/program/programContext'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionInternationalExpertsImages } from '@/components/imgs'
import { IconGeneralCircleArrorRight } from '@/components/icons'

type TSectionInternationalExperts = TPropClassNames

const SectionInternationalExperts = ({
  classNames
}: TSectionInternationalExperts) => {

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>
            Российские и зарубежные эксперты программы обучения
          </h2>

        </div>
        <div className={stls.right}>
          <ImgSectionInternationalExpertsImages
            classNames={[stls.ImgSectionInternationalExpertsImages]}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionInternationalExperts
