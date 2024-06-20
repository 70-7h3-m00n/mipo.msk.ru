import stls from '@/styles/components/sections/general/SectionRelevantContentOnly.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionRelevantContentOnlyImages } from '@/components/imgs'
import { IconGeneralCircleCheckAlt } from '@/components/icons'

type TSectionRelevantContentOnly = TPropClassNames

const SectionRelevantContentOnly = ({
  classNames
}: TSectionRelevantContentOnly) => {

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Только актуальный контент</h2>
        <div className={stls.content}>
          <div className={stls.left}>

          </div>
          <div className={stls.right}>
            <ImgSectionRelevantContentOnlyImages />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionRelevantContentOnly
