import stls from '@/styles/components/sections/TrustedBy.module.sass'
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
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  const slides = [
    {
      img: (
        <ImgLogoLenovo classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
      )
    },
    {
      img: <ImgLogoVtb classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
    },
    {
      img: <ImgLogoRzhd classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
    },
    {
      img: (
        <ImgLogoRosneft classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
      )
    },
    {
      img: (
        <ImgLogoGasprom classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
      )
    },
    {
      img: (
        <ImgLogoSberbank classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
      )
    },
    {
      img: (
        <ImgLogoSovkombank
          classNames={[cn(stls.img, { [stls.atMba]: atMba })]}
        />
      )
    },
    {
      img: (
        <ImgLogoTatneft classNames={[cn(stls.img, { [stls.atMba]: atMba })]} />
      )
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames }), {
          [stls.atMba]: atMba
        }) || undefined
      }>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
          {atMba ? 'Обучают своих сотрудников у нас' : 'Нам доверяют обучение'}
        </h2>
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
