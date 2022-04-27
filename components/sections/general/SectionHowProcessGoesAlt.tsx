import stls from '@/styles/components/sections/general/SectionHowProcessGoesAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionHowProcessGoesAltPersonStudying } from '@/components/imgs'
import { IconGeneral3dSpiral } from '@/components/icons'

type TSectionHowProcessGoesAlt = TPropClassNames

const SectionHowProcessGoesAlt = ({
  classNames
}: TSectionHowProcessGoesAlt) => {
  const { program } = useContext(ProgramContext)

  if (!program?.whatYouWillLearn) return null

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>Как проходит обучение</h2>
          <p className={stls.p}>
            Обучение осуществляется по заочной форме с применением дистанционных
            <span className={stls.highlight}>*</span> технологий. Лекции,
            общение, тестирование проходят в онлайн-формате через
            образовательную платформу
            <ImgSectionHowProcessGoesAltPersonStudying
              classNames={[stls.img, stls.laptopDesktop]}
            />
            <p className={stls.info}>
              <span className={stls.highlight}>Дистанционное образование</span>{' '}
              — это обучение в комфортном темпе из любой точки мира и
              возможность совмещать с работой.
              <IconGeneral3dSpiral
                color={colors.kappa}
                classNames={[stls.IconGeneral3dSpiralInfo]}
              />
            </p>
          </p>
        </div>
        <div className={stls.right}>
          <IconGeneral3dSpiral
            color={colors.nu}
            classNames={[stls.IconGeneral3dSpiralRight]}
          />
          <h3 className={stls.h3}>
            В программу дистанционного обучения входит:
          </h3>
          <ol className={stls.list}>
            {program?.whatYouWillLearn?.map((item, idx) => (
              <li key={`${item?.item}-${idx}`} className={stls.listItem}>
                <div className={stls.idx}>{idx + 1}</div>
                <p className={stls.listItemP}>{item?.item}</p>
              </li>
            ))}
          </ol>
          <ImgSectionHowProcessGoesAltPersonStudying
            classNames={[stls.img, stls.phonetablet]}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionHowProcessGoesAlt
