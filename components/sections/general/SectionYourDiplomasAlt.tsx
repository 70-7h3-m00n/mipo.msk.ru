import stls from '@/styles/components/sections/general/SectionYourDiplomasAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
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
  ImgSupplement
} from '@/components/imgs'
import { IconGeneralArrowRightAlt } from '@/components/icons'
import { BtnZeta } from '@/components/btns'

type TSectionYourDiplomasAlt = TPropClassNames

const SectionYourDiplomasAlt = ({ classNames }: TSectionYourDiplomasAlt) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.top}>
          <h2 className={stls.title}>Ваши будущие дипломы</h2>
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
        <div className={stls.diplomas}>
          <div className={stls.left}>
            <Popup
              modal
              lockScroll
              nested
              closeOnDocumentClick>
            </Popup>
            <Popup
              trigger={
                <a href='#!' className={stls.diploma}>
                  <ImgDiplomaTemplate />
                </a>
              }
              modal
              lockScroll
              nested
              closeOnDocumentClick>
            </Popup>
          </div>
          <div className={stls.right}>
            <Popup
              modal
              lockScroll
              nested
              closeOnDocumentClick>
            </Popup>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionYourDiplomasAlt
