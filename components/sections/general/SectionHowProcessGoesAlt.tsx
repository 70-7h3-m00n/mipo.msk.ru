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
import Title from '@/components/parts/Title'

type TSectionHowProcessGoesAlt = TPropClassNames

const SectionHowProcessGoesAlt = ({
  classNames,
  isForPhychology = false
}: TSectionHowProcessGoesAlt) => {
  const { program } = useContext(ProgramContext)

  const atMba = program?.category?.type === 'mba'

  const listDynamic =
    program?.SectionHowStudyingGoesItems &&
    program?.SectionHowStudyingGoesItems?.length > 0
      ? program.SectionHowStudyingGoesItems
      : null

  const list =
    listDynamic ||
    [
      {
        item: 'Онлайн-вебинары с возможностью просмотра записей в течение всего курса обучения'
      },
      {
        item: 'Разборы реальных кейсов'
      },
      {
        item: 'Лекционные и полезные дополнительные материалы к дисциплинам'
      },
      {
        item: 'Общение с одногруппниками и единомышленниками в чатах на вебинарах'
      },
      {
        item: 'Тестирование и работа над ошибками после каждой дисциплины'
      },
      {
        item:
          (atMba &&
            'Сопровождение персонального куратора, от начала и до получения документа на руки, с обратной связью от преподавателей') ||
          'Ведение и помощь в обучении куратором, от начала и до получения документа на руки, с обратной связью от преподавателей через куратора'
      },
      {
        item:
          (atMba &&
            'Видеоматериал с практическими заданиями от преподавателей-практиков и экспертов') ||
          'Видео-материал с практическими упражнения от преподавателей'
      },
      {
        item:
          (atMba &&
            'Диплом «Мастер делового администрирования — Master of Business Administration (MBA)». Официальным диплом РФ установленного образца с внесением данных в — Федеральный реестр сведений о документах об образовании (ФИС-ФРДО). Общеевропейское приложение к диплому (Diploma Supplement), не требующее дополнительного перевода или заверения для предъявления в зарубежных организациях.') ||
          'Официальным диплом РФ установленного образца с внесением данных в — Федеральный реестр сведений о документах об образовании (ФИС-ФРДО)'
      }
    ].filter(el => el.item)

  // if (!program?.whatYouWillLearn) return null

  const rootClassNames = cn(
    stls.container,
    isForPhychology && stls.forPhycholohy,
    getClassNames({ classNames }) || undefined
  )
  return (
    <section className={rootClassNames}>
      <Wrapper classNames={[stls.wrapper]}>
        {isForPhychology ? (
          <Title>Как проходит обучение</Title>
        ) : (
          <h2 className={stls.title}>Как проходит обучение</h2>
        )}

        <div className={stls.content}>
          <div className={stls.left}>
            <p className={cn(stls.p, isForPhychology && stls.forPhycholohy)}>
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
            <div
              className={cn(
                stls.rightBody,
                isForPhychology && stls.forPhycholohy
              )}>
              <IconGeneral3dSpiral
                color={colors.nu}
                classNames={[stls.IconGeneral3dSpiralRight]}
              />
              <h3
                className={cn(stls.h3, isForPhychology && stls.forPhycholohy)}>
                В программу дистанционного обучения входит:
              </h3>
              <ol
                className={cn(
                  stls.list,
                  isForPhychology && stls.forPhycholohy
                )}>
                {list.map((item, idx) => (
                  <li key={`${item?.item}-${idx}`} className={cn(stls.listItem, isForPhychology && stls.forPhycholohy)}>
                    <div
                      className={cn(
                        stls.idx,
                        isForPhychology && stls.forPhycholohy
                      )}>
                      {idx + 1}
                    </div>
                    <p
                      className={cn(
                        stls.listItemP,
                        isForPhychology && stls.forPhycholohy
                      )}>
                      {item?.item}
                    </p>
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
