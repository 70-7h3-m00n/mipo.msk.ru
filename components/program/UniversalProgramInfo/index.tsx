import stls from './index.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import IconMan from '@/components/icons/highereducation/IconMan'
import IconLaptop from '@/components/icons/highereducation/IconLaptop'
import IconDocument from '@/components/icons/highereducation/IconDocument'
import Wrapper from '@/components/layout/Wrapper'

interface Props {
  className?: string
}

const UniversalProgramInfo = ({ className }: Props) => {
  const vals = [
    {
      key: 'Авторы программы:',
      val: 'Разработчики из Германии, Японии и Израиля, а также специалисты «Яндекса», «Сбера»',
      icon: IconMan,
      info: ''
    },
    {
      key: 'Формат обучения:',
      val: 'Обучение из любой точки мира в удобное для вас время —  на собственной платформе',
      icon: IconLaptop,
      info: ''
    },
    {
      key: 'Документ об окончании:',
      val: 'Выдаём диплом МИПО, и документы об образовании установленного образца',
      icon: IconDocument,
      info: ''
    }
  ]

  return (
    <section className={stls.section}>
      <Wrapper >
        <div className={cn(stls.container, className)}>
          {vals.map(({ key, val, icon: Icon, info }, idx) => (
            <div
              key={key + val + idx}
              className={cn(stls.group, {
                [stls.withInfo]: info
              })}>
              {/* {info?.label && (
                <Popup
                  trigger={open => (
                    <a href='#!' className={cn(stls.infoLabel)}>
                      {info.label}
                    </a>
                  )}
                  position='top right'
                  closeOnDocumentClick
                  keepTooltipInside={`.${selectors.sectionHero}`}>
                  <div className={stls.infoContent}> {info.content}</div>
                </Popup>
              )} */}
              <div className={stls.icon}>{<Icon />}</div>
              <div>
                <p className={cn(stls.key)}>{key}</p>
                <p className={stls.val}>{val}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default UniversalProgramInfo
