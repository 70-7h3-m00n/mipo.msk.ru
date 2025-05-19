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
import Image from 'next/image'

type TSectionYourDiplomasAlt = TPropClassNames

const DiplomasHigher = ({ classNames }: TSectionYourDiplomasAlt) => {
  const { program } = useContext(ProgramContext)

  return (
    <div className={stls.container} id='diplom'>
      <Wrapper>
        <div>
          <Title className={stls.title}>Ваши будущие дипломы</Title>
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
                classNames={[cn(stls.licenceLink)]}>
                <span>Образовательная лицензия</span>
                <Image
                  alt='Лицензия'
                  width={84}
                  height={105}
                  src='/assets/imgs/hardereducation/license_prew.png'></Image>
              </BtnZeta>
            </div>
          </div>
        </div>
        <div className={stls.imagesWrapper}>
          <Popup
            trigger={
              <a href='#!' className={stls.diploma}>
                <Image
                  layout='fill'
                  src='/assets/imgs/hardereducation/diplom-1-h.jpg'
                  alt='Диплом высшего образования'
                />
              </a>
            }
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {close => (
              <PopupImage
                forDiplomas={true}
                image={
                  <Image
                    layout='fill'
                    src='/assets/imgs/hardereducation/diplom-1-h.jpg'
                    alt='Диплом высшего образования'
                  />
                }
                close={close}
              />
            )}
          </Popup>
          <Popup
            trigger={
              <a href='#!' className={stls.diploma}>
                <Image
                  layout='fill'
                  src='/assets/imgs/hardereducation/diplom-2-h.jpg'
                  alt='Диплом высшего образования'
                />
              </a>
            }
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {close => (
              <PopupImage
                forDiplomas={true}
                image={
                  <Image
                    layout='fill'
                    src='/assets/imgs/hardereducation/diplom-2-h.jpg'
                    alt='Диплом высшего образования'
                  />
                }
                close={close}
              />
            )}
          </Popup>
        </div>
      </Wrapper>
    </div>
  )
}

export default DiplomasHigher
