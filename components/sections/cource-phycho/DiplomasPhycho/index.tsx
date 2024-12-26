import stls from './index.module.sass'
import { TPropClassNames } from '@/types/index'
import React, { useContext, useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesExternal } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { PopupImage } from '@/components/popups'
import {
  ImgCertificate,
  ImgDiplomaInternational,
  ImgDiplomaInternationalMba,
  ImgDiplomaTemplate,
  ImgSectionRelevantContentOnlyImages,
  ImgSupplement
} from '@/components/imgs'
import {
  IconGeneralArrowRightAlt,
  IconGeneralCircleCheckAlt
} from '@/components/icons'
import { BtnZeta } from '@/components/btns'
import Title from '@/components/parts/Title'
import ImgDiplomaInternationalDiplomaSut from '@/components/imgs/diplomas/ImgDiplomaInternationalDiplomaSut'

type TSectionYourDiplomasAlt = TPropClassNames

const DiplomasPhycho = ({ classNames }: TSectionYourDiplomasAlt) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const [activeTab, setActiveTab] = useState<number>(1)

  const data = [
    {
      title: 'Диплом',
      subtitle: 'Диплом установленного образца',
      text: '<span>Завершив обучение в МИПО, вы получите диплом</span>, признанный на государственном уровне и соответствующий всем стандартам.',
      list: [
        'Институт имеет лицензию образовательного учреждения. <span>Номер лицензии:</span> Л035-01298-77/00179971.',
        '<span>Диплом регистрируется в Федеральной информационной системе ФРДО</span>, что обеспечивает официальное признание документа на всей территории РФ.'
      ],
      img: <ImgDiplomaTemplate />
    },
    {
      title: 'Сертификат',
      subtitle: 'Сертификат',
      text: 'Мы проводим обучение на основании <span>государственной образовательной лицензии</span> №Л035-01298-77/00179971  Наши выпускники также получают электронный сертификат об успешном прохождении курса.',
      img: <ImgCertificate />
    },
    {
      title: 'MBA',
      subtitle: 'Международный диплом MBA PSY',
      text: 'Наши выпускники получают диплом <span>Master of business psychology</span>',
      list: [
        '<span>Диплом MBA</span> признается во всех странах мира, что открывает широкие перспективы для международной карьеры.'
      ],
      img: <ImgDiplomaInternationalDiplomaSut />
    }
  ]
  return (
    <div className={stls.container} id='diplom'>
      <Wrapper>
        <div>
          <Title>
            Диплом о профессиональной переподготовке подтвердит вашу
            квалификацию
          </Title>
          <div className={stls.content}>
            <div className={stls.left}>
              <p className={stls.p}>
                Все наши программы лицензированы, а дипломы имеют международные
                приложения, поэтому они ценятся клиентами и профессиональным
                сообществом как в России, так и за рубежом!
              </p>
            </div>
            <div className={stls.right}>
              <BtnZeta
                href={routesExternal.licence}
                target='_blank'
                classNames={[
                  cn(stls.licenceLink, { [stls.altStyles]: altStyles })
                ]}>
                <span>
                  Уведомление о предоставлении лицензии{' '}
                  <span className={stls.highlight}>№041221</span>
                </span>
                <IconGeneralArrowRightAlt
                  classNames={[stls.IconGeneralArrowRightAlt]}
                />
              </BtnZeta>
            </div>
          </div>
        </div>
        <div>
          <div className={stls.tabsblock}>
            {data.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={activeTab == index + 1 && stls.active}
                  onClick={() => setActiveTab(index + 1)}>
                  {elem.title}
                </div>
              )
            })}
          </div>
          <div className={stls.innerTabBlock}>
            <div>
              <div className={stls.titleTabBlock}>{data[activeTab - 1].subtitle}</div>
              {data[activeTab - 1].text && (
                <div className={stls.textTabBlock}
                  dangerouslySetInnerHTML={{ __html: data[activeTab - 1].text }}
                />
              )}

              <ul className={stls.list}>
                {data[activeTab - 1].list &&
                  data[activeTab - 1].list.map((li, index) => (
                    <li key={index}>
                      <IconGeneralCircleCheckAlt color1='#AC94F4' />
                      <span dangerouslySetInnerHTML={{ __html: li }}></span>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              {data[activeTab - 1].img && (
                <Popup
                  trigger={
                    <a href='#!' className={stls.diploma}>
                      {data[activeTab - 1].img}
                    </a>
                  }
                  modal
                  lockScroll
                  nested
                  closeOnDocumentClick>
                  {close => (
                    <PopupImage image={data[activeTab - 1].img} close={close} />
                  )}
                </Popup>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default DiplomasPhycho
