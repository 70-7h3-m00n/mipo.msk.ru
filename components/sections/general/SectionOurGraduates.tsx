import stls from '@/styles/components/sections/general/SectionOurGraduates.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { PopupCta } from '@/components/popups'
import { BtnZeta } from '@/components/btns'
import { IconGeneralArrowRightAlt } from '@/components/icons'
import { ImgSectionOurGraduatesPeopleStudying } from '@/components/imgs'

type TSectionOurGraduates = TPropClassNames

const SectionOurGraduates = ({ classNames }: TSectionOurGraduates) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>Наши выпускники</h2>
          <p className={stls.p}>
            По опросам наших студентов в{' '}
            <span className={stls.highlight}>2023 году:</span>
          </p>
          <ul className={stls.list}>
            <li className={stls.listItem}>
              <Popup
                trigger={() => (
                  <div className={stls.btnContainer}>
                    <BtnZeta classNames={[stls.btn, stls.btnZeta]}>
                      <span className={stls.btnText}>Оставить заявку</span>
                      <IconGeneralArrowRightAlt
                        classNames={[stls.IconGeneralArrowRightAlt]}
                      />
                    </BtnZeta>
                  </div>
                )}
                modal
                lockScroll
                nested
                closeOnDocumentClick>
              </Popup>
            </li>
          </ul>
        </div>
        <div className={stls.right}>
          <ImgSectionOurGraduatesPeopleStudying classNames={[stls.img]} />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionOurGraduates
