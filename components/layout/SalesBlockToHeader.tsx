import cn from 'classnames'
import PopupTrigger from '../general/PopupTrigger'
import Wrapper from './Wrapper'
import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useRef } from 'react'
import ProgramAdmission from '../program/ProgramAdmission'

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
    <div className={cn(stls.row, stls.saleBlock)} ref={saleBlock}>
      <Wrapper>
        <span>
          {/* <b>60% СКИДКА</b> на все курсы до <ProgramAdmission /> */}
          <b>60% СКИДКА</b> на все курсы и второй курс в подарок до 30 ноября
        </span>
        <span id="header-button"><PopupTrigger btn='epsilon' cta='signUpForCourse' /></span>
      </Wrapper>
    </div>
  )
}

export default SalesBlockToHeader
