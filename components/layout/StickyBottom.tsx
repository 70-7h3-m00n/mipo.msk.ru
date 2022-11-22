import stls from '@/styles/components/layout/StickyBottom.module.sass'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { discount } from '@/data/price'
import { routePayment } from '@/data/routes'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import IconWavyShape from '@/components/icons/IconWavyShape'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconCloseCircle } from '@/components/icons'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'

const StickyBottom = () => {
  const router = useRouter()

  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const [isShown, setIsShown] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    if (router.asPath !== routePayment) {
      document.addEventListener('scroll', () => {
        const scrollHeight = document.body.scrollHeight
        const pageYOffset = window.pageYOffset
        pageYOffset > (scrollHeight * 10) / 100 &&
        pageYOffset + window.innerHeight < (scrollHeight * 90) / 100 &&
        !isClosed
          ? setIsShown(true)
          : setIsShown(false)
      })
    }
  }, [router, setIsShown, isClosed])

  return (
    <div
      className={cn({
        [stls.container]: true,
        [stls.isShown]: isShown,
        [stls.isClosed]: isClosed,
        [stls.altStyles]: altStyles
      })}>
      <Wrapper>
        <div className={cn(stls.shape, { [stls.altStyles]: altStyles })}>
          <IconWavyShape />
        </div>
        <p className={stls.discount}>
          <span className={stls.highlight}>Скидка {discount}</span>{' '}
          <br className={stls.smallMobileOnly} /> на все программы{' '}
          <br className={stls.mobileOnly} /> <ProgramDiscountUntil />!
        </p>
        <div className={stls.btns}>
          <PopupTrigger btn='theta' cta='learnAboutUs' />
          <div className={stls.btn2}>
            <PopupTrigger btn='alpha' cta='consultMe' />
          </div>
        </div>
        <div className={stls.btnMobile}>
          <PopupTrigger btn='theta' cta='learnMore' />
        </div>
      </Wrapper>
      <button className={stls.close} onClick={() => setIsClosed(true)}>
        <IconCloseCircle blackCross />
      </button>
    </div>
  )
}

export default StickyBottom
