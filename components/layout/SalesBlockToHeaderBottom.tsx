import cn from 'classnames'
import PopupTrigger from '../general/PopupTrigger'
import Wrapper from './Wrapper'
import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useRef } from 'react'
import { SALE_VALUE } from '@/lib/constant'
import { BtnTooltip } from '../btns'

const SalesBlockToHeaderBottom = () => {
  const saleBlock = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!saleBlock) return

    const keepMenuToTop = () => {
      saleBlock.current.style.opacity = window.scrollY > 0 ? '1' : '0'
      saleBlock.current.style.visibility =
        window.scrollY > 0 ? 'visible' : 'hidden'
    }

    document.addEventListener('scroll', keepMenuToTop)

    return () => document.removeEventListener('scroll', keepMenuToTop)
  }, [])

  return (
    <div className={cn(stls.row, stls.saleBlock, stls.wrapper)} ref={saleBlock}>
      <Wrapper>
        <div>
          <div>
            {/* <b>60% СКИДКА</b> на все курсы до <ProgramAdmission /> */}
            Скидка до -{SALE_VALUE}% +{' '}
            <span className={stls.whiteBg}>
              Карьерное консультирование в подарок
            </span> <BtnTooltip />
            
          </div>
          <div className={stls.subtitle}>
            на все программы и курсы до 31 марта
          </div>
        </div>

        <div className={stls.buttons}>
          <span id='header-button'>
            <PopupTrigger btn='epsilon' cta='signUpForCourse' />
          </span>
          <span className={stls.secondButton}>
            <PopupTrigger btn='borderButtonWhite' cta='consultMe' />
          </span>
        </div>
      </Wrapper>
    </div>
  )
}

export default SalesBlockToHeaderBottom
