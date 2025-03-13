import cn from 'classnames'
import PopupTrigger from '../general/PopupTrigger'
import Wrapper from './Wrapper'
import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useRef } from 'react'
import { SALE_VALUE } from '@/lib/constant'

const SalesBlockToHeader = () => {
  const saleBlock = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!saleBlock) return

    const keepMenuToTop = () => {
      saleBlock.current.style.opacity = window.scrollY > 0 ? '1' : '0'
      saleBlock.current.style.visibility = window.scrollY > 0 ? 'visible' : 'hidden'
    }

    document.addEventListener('scroll', keepMenuToTop)

    return () => document.removeEventListener('scroll', keepMenuToTop)
  }, [])

  return (
    <div className={cn(stls.row, stls.saleBlock, stls.wrapper)} ref={saleBlock}>
      <Wrapper>
        <span>
          {/* <b>60% СКИДКА</b> на все курсы до <ProgramAdmission /> */}
          Распродажа в МИПО
        </span>
        <div className={stls.infoSales}>
          <div>-{SALE_VALUE}</div>
          <div>
            <div>%</div>
            <div>Скидка<br />На все курсы</div>
          </div>
        </div>
        <span id="header-button"><PopupTrigger btn='epsilon' cta='signUpForCourse' /></span>
      </Wrapper>
    </div>
  )
}

export default SalesBlockToHeader
