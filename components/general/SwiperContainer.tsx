import stls from '@/styles/components/general/SwiperContainer.module.sass'
import { useContext, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import Popup from 'reactjs-popup'
import SwiperCore, { Navigation, Pagination, Grid, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { PopupImage } from '../popups'
import { IconArrowRight } from '../icons'

SwiperCore.use([Navigation])

const SwiperContainer = ({
  teachers = false,
  diplomas = false,
  slides,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 10 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false
}) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const isMobileLayout = useMediaQuery({ query: '(max-width: 480px)' })
  const isTabletLayout = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  })
  const isLaptopLayout = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1200px)'
  })
  const isDesktopLayout = useMediaQuery({ query: '(min-width: 1201px)' })

  const layouts = [
    { mobile: isMobileLayout },
    { tablet: isTabletLayout },
    { laptop: isLaptopLayout },
    { desktop: isDesktopLayout }
  ]

  const getCurrentLayoutKey = () => {
    const currentLayout = layouts.find(layout => {
      const firstKey = Object.keys(layout)[0]

      if (layout[firstKey]) return layout
    })

    if (!currentLayout) return null

    const currentLayoutKey = Object.keys(currentLayout)[0]

    return currentLayoutKey
  }

  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }

  const assignNumOfSlidesPerView = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 0

    const { slidesNum } = swiperOptions[currentLayoutKey]

    return slidesNum
  }

  const checkIfSwiperEnabled = () => {
    if (alwaysDisabledOnDesktop && (isLaptopLayout || isDesktopLayout))
      return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides && slides.length)
  }

  const getSpaceBetween = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 10

    return swiperOptions[currentLayoutKey].spaceBetween
  }

  const swiperRef = useRef(null)
  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()
  
  return (
    <>
      <Swiper
        enabled={checkIfSwiperEnabled()}
        spaceBetween={getSpaceBetween()}
        slidesPerView={assignNumOfSlidesPerView()}
        modules={[Grid, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        grid={{
          rows: isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1,
          fill: !isMobileLayout ? 'row' : 'column'
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className={classNames({
          [stls.container]: true,
          [stls.teachers]: teachers,
          [stls.diplomas]: diplomas,
          [stls.altStyles]: altStyles
        })}>
        {slides &&
          slides.map((slide, idx) => (
            <SwiperSlide key={`slide-${idx}`}>
              {diplomas ? (
                <Popup trigger={<div>{slide}</div>} modal nested>
                  {close => <PopupImage image={slide} close={close} />}
                </Popup>
              ) : (
                slide
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={stls.sliderControls}>
        <button onClick={handlePrev} className={stls.controlBtn}>
          <IconArrowRight classNames={[stls.left]} />
        </button>
        <button onClick={handleNext} className={stls.controlBtn}>
          <IconArrowRight />
        </button>
      </div>
    </>
  )
}

export default SwiperContainer
