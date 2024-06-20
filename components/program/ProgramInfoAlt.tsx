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

  const vals = [
    {
      key: 'Срок обучения:',
      icon: IconGeneralCalendarAlt,
      info: {
        label: 'Как сократить?',
        content: (
          <>
            <p className={stls.infoContentP}>
              Можно окончить экстерном, тем самым сократив срок обучения до{' '}
            </p>
            {/* <span className={cn(stls.highlight, {[stls.altStyles]: altStyles})}> до 1 года 8 мес.</span> */}
          </>
        )
      }
    },
    {
      key: 'Форма обучения:',
      icon: IconGeneralUsers
    },
    {
      key: 'Ближайшее зачисление:',
      val: <ProgramAdmission />,
      icon: IconGeneralMap
    },
    {
      key: 'Количество часов:',
      icon: IconGeneralClockAlt
    },
    {
      key: 'Документ об окончании:',
      icon: IconGeneralDocument,
      info: {
        label: (
          <IconGeneralInfo
            classNames={[stls.IconGeneralInfo]}
          />
        ),
        content: (
          <>
            <p className={stls.infoContentP}>
                Выданный диплом вносится в{' '}
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
              position='top right'
              closeOnDocumentClick
              keepTooltipInside={`.${selectors.sectionHero}`}>
              <div className={stls.infoContent}> {info.content} </div>
            </Popup>
          )}
          <div className={stls.icon}>
          </div>
          <div>
            <p className={stls.val}>{val}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfoAlt
