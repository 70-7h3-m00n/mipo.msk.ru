import stls from '@/styles/components/general/SwiperContainer.module.sass'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  teachers = false,
  diplomas = false,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 10 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false
}) => {


  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }


  const checkIfSwiperEnabled = () => {

  }

  const getSpaceBetween = () => {

  }

  return (
    <Swiper
      modules={[Grid]}
      pagination={{ clickable: true, dynamicBullets: true }}
      className={classNames({
        [stls.container]: true,
        [stls.teachers]: teachers,
        [stls.diplomas]: diplomas,
      })}>
    </Swiper>
  )
}

export default SwiperContainer
