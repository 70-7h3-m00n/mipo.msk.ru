import stls from '@/styles/components/sections/general/SectionOurGraduates.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { PopupCta } from '@/components/popups'
import { BtnZeta } from '@/components/btns'
import { IconGeneralArrowRightAlt } from '@/components/icons'
import { ImgSectionOurGraduatesPeopleStudying } from '@/components/imgs'
import { MouseEventHandler } from 'react'

type TSectionOurGraduates = TPropClassNames

const SectionOurGraduates = ({ classNames }: TSectionOurGraduates) => {
  const list = [
    {
      title: '72%',
      text: 'перешли в более пристижную компанию'
    },
    {
      title: '94%',
      text: 'увеличили свои финансовые показатели в бизнасе'
    },
    {
      title: '96%',
      text: 'остались довольны обучением'
    }
  ]
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
            <span className={stls.highlight}>2021 году:</span>
          </p>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li
                key={`${item.title}-${idx}`}
                className={cn(stls.listItem, stls.listItemTestimonial)}>
                <div className={stls.listItemTestimonialBody}>
                  <p className={stls.listItemTitle}>{item.title}</p>
                  <p className={stls.listItemText}>{item.text}</p>
                </div>
              </li>
            ))}
            <li className={stls.listItem}>
              <Popup
                trigger={() => (
                  <div className={stls.btnContainer}>
                    <BtnZeta classNames={[stls.btn, stls.btnZeta]}>
                      Оставить заявку{' '}
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
                {(close: MouseEventHandler) => <PopupCta close={close} />}
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
