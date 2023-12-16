import stls from '@/styles/components/program/ProgramInfoAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendar,
  IconGeneralCalendarAlt,
  IconGeneralUsers,
  IconGeneralMap,
  IconGeneralDocument,
  IconGeneralClockAlt,
  IconGraduateHat,
  IconPaperScroll,
  IconClock,
  IconDoc,
  IconGeneralInfo
} from '@/components/icons'

type TProgramInfoAltProps = TPropClassNames

const ProgramInfoAlt: FC<TProgramInfoAltProps> = ({ classNames }) => {
  const { program } = useContext(ProgramContext)
  const altStyles = program?.category?.type === 'profession'
  const atMba = program?.category?.type === 'mba'
  const atCourse = program?.category?.type === 'course'

  const vals = [
    {
      key: 'Срок обучения:',
      val: (
        <ProgramStudyDuration
          studyMonthsDuration={
            program?.timenprice && program?.timenprice?.[0]?.studyMonthsDuration
          }
        />
      ),
      icon: IconGeneralCalendarAlt,
      info: {
        label: 'Как сократить?',
        content: (
          <>
            <p className={stls.infoContentP}>
              Можно окончить экстерном, тем самым сократив срок обучения до{' '}
              <span
                className={cn(stls.highlight, { [stls.altStyles]: altStyles })}>
                <ProgramStudyDuration
                  studyMonthsDuration={
                    program?.timenprice?.[0]?.studyMonthsDuration / 2 || 0
                  }
                  nonBrakingSpace
                />
              </span>
            </p>
            {/* <span className={cn(stls.highlight, {[stls.altStyles]: altStyles})}> до 1 года 8 мес.</span> */}
          </>
        )
      }
    },
    {
      key: 'Форма обучения:',
      val: program?.study_form && program?.study_form?.label,
      icon: IconGeneralUsers
    },
    {
      key: 'Ближайшее зачисление:',
      val: <ProgramAdmission />,
      icon: IconGeneralMap
    },
    {
      key: 'Количество часов:',
      val: `${program?.timenprice && program?.timenprice?.[0]?.studyHours} ч`,
      icon: IconGeneralClockAlt
    },
    {
      key: 'Документ об окончании:',
      val: atCourse ? 'Удостоверение' : atMba ? 'Диплом MBA' : 'Диплом о переподготовке',
      icon: IconGeneralDocument,
      info: {
        label: (
          <IconGeneralInfo
            classNames={[stls.IconGeneralInfo]}
            color={altStyles ? colors['xi-2'] : undefined}
          />
        ),
        content: (
          <>
            <p className={stls.infoContentP}>
              {atCourse
                ? 'Удостоверение о повышении квалификации, это официальный документ свидетельствующий, об актуализации теоретических и практических знаний'
                : altStyles
                ? 'Диплом о переподготовке — это официальный документ, который подтверждает прохождение программы.'
                : atMba
                ? 'После окончания обучения и защиты дипломного проекта каждый выпускник получает: Диплом «Мастер делового администрирования — Master of Business Administration (MBA)». Диплом о профессиональной переподготовке, установленного образца Министерством образования и науки. Общеевропейское приложение к диплому (Diploma Supplement), не требующее дополнительного перевода или заверения для предъявления в зарубежных организациях.'
                : 'Диплом о переподготовке — это официальный документ, который даёт право вести профессиональную деятельность по полученной специальности.'}
            </p>
            <p className={stls.infoContentP}>
                Выданный диплом вносится в{' '}
              <span
                className={cn(stls.highlight, { [stls.altStyles]: altStyles })}>
                ФРДО — Федеральный реестр сведений о документах об образовании
              </span>
            </p>
          </>
        )
      }
    }
  ]

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {vals.map(({ key, val, icon: Icon, info }, idx) => (
        <div
          key={key + val + idx}
          className={cn(stls.group, {
            [stls.withInfo]: info
          })}>
          {info?.label && (
            <Popup
              trigger={open => (
                <a
                  href='#!'
                  className={cn(stls.infoLabel, {
                    [stls.altStyles]: altStyles
                  })}>
                  {info.label}
                </a>
              )}
              position='top right'
              closeOnDocumentClick
              keepTooltipInside={`.${selectors.sectionHero}`}>
              <div className={stls.infoContent}> {info.content} </div>
            </Popup>
          )}
          <div className={stls.icon}>
            {<Icon color={altStyles ? colors['nu-2'] : undefined} />}
          </div>
          <div>
            <p className={cn(stls.key, { [stls.altStyles]: altStyles })}>
              {key}
            </p>
            <p className={stls.val}>{val}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfoAlt
