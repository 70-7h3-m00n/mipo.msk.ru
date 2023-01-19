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

  const listDynamic =
    program?.SectionHowStudyingGoesItems &&
    program?.SectionHowStudyingGoesItems?.length > 0
      ? program.SectionHowStudyingGoesItems
      : null

  const list = listDynamic || [
    {
      item: 'Онлайн-вебинары с возможностью просмотра записей в течение всего курса обучения'
    },
    {
      item: 'Разборы реальных клинических ситуаций'
    },
    {
      item: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      item: 'Общение с одногруппниками и единомышленниками в чатах на вебинарах'
    },
    {
      item: 'Тестирование и работа над ошибками после каждой дисциплины'
    },
    {
      item: 'Ведение и помощь в обучении куратором, от начала и до получения документа на руки, с обратной связью от преподавателей через куратора'
    },
    {
      item: 'Видео-материал с практическими упражнения от преподавателей'
    },
    {
      item: 'Официальным диплом РФ установленного образца с внесением данных в — Федеральный реестр сведений о документах об образовании (ФИС-ФРДО)'
    }
  ]

  // if (!program?.whatYouWillLearn) return null

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Как проходит обучение</h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <p className={stls.p}>
              Обучение осуществляется по заочной форме с применением
              дистанционных
              <span className={stls.highlight}>*</span> технологий. Лекции,
              общение, тестирование проходят в онлайн-формате через
              образовательную платформу
            </p>
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
          </div>
          <div className={stls.right}>
            <div className={stls.rightBody}>
              <IconGeneral3dSpiral
                color={colors.nu}
                classNames={[stls.IconGeneral3dSpiralRight]}
              />
              <h3 className={stls.h3}>
                В программу дистанционного обучения входит:
              </h3>
              <ol className={stls.list}>
                {list.map((item, idx) => (
                  <li key={`${item?.item}-${idx}`} className={stls.listItem}>
                    <div className={stls.idx}>{idx + 1}</div>
                    <p className={stls.listItemP}>{item?.item}</p>
                  </li>
                ))}
              </ol>
            </div>
            <ImgSectionHowProcessGoesAltPersonStudying
              classNames={[stls.img, stls.phoneTablet]}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionHowProcessGoesAlt
