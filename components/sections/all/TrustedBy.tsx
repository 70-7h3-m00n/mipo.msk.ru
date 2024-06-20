import stls from '@/styles/components/sections/all/TrustedBy.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid } from 'swiper'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { breakpoints } from '@/config/index'
import {
  ImgLogoLenovo,
  ImgLogoVtb,
  ImgLogoRzhd,
  ImgLogoRosneft,
  ImgLogoGasprom,
  ImgLogoSberbank,
  ImgLogoSovkombank,
  ImgLogoTatneft
} from '@/components/imgs'

type TypeTrustedBy = {
  classNames?: TypeClassNames
}

const TrustedBy = ({ classNames = [] }: TypeTrustedBy) => {

  const slides = [
    {
      img: (
        <ImgLogoLenovo
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoVtb
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoRzhd
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoRosneft
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoGasprom
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoSberbank
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoSovkombank
          classNames={[cn(stls.img)]}
        />
      )
    },
    {
      img: (
        <ImgLogoTatneft
          classNames={[cn(stls.img)]}
        />
      )
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames }), {
        }) || undefined
      }>
      <Wrapper>
        <Swiper
          modules={[Grid]}
          grid={{ rows: 2, fill: 'row' }}
          className={'TrustedBy__Swiper'}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            [breakpoints.laptop]: {
              slidesPerView: 4
            }
          }}
          pagination={{
            dynamicBullets: true
          }}>
          {slides.map(({ img }, idx) => (
            <SwiperSlide key={`TrustedBySlide-${idx}`}>{img}</SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}

export default TrustedBy
