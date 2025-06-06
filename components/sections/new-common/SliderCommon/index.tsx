import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Wrapper from '@/components/layout/Wrapper'
import Title from '@/components/parts/Title'
import stls from './index.module.sass'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import UniversalButton from '@/components/btns/UniversalButton'
import { PopupCta } from '@/components/popups'
import { IconArrowRight } from '@/components/icons'

type SliderElement = {
  title: string
  desc: string
  bgImage: string
  color: 'black' | 'grey' | 'white' | 'purple'
}

export default function MySlider() {
  const swiperRef = useRef(null)

  const data: SliderElement[] = [
    {
      title: 'Пройдите короткий опрос и получите дополнительную выгоду до 15.000р. на любой курс + два курса в подарок!',
      desc: '*подробности уточняйте у специалиста приемной комиссии',
      bgImage: '/assets/imgs/banners/slide0.jpg',
      color: 'white'
    },
    {
      title: 'Московский институт профессионального образования',
      desc: 'Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно',
      bgImage: '/assets/imgs/banners/slide1.jpg',
      color: 'white'
    },
    {
      title: 'Станьте специалистом с международным сертификатом',
      desc: 'Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно',
      bgImage: '/assets/imgs/banners/slide2.jpg',
      color: 'black'
    },
    {
      title: 'Высшее образование - постройте свою карьеру мечты',
      desc: 'Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно',
      bgImage: '/assets/imgs/banners/slide3.jpg',
      color: 'white'
    },
    {
      title: 'Скидка до -30% на все курсы',
      desc: 'Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно',
      bgImage: '/assets/imgs/banners/slide4.jpg',
      color: 'white'
    }
  ]

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <section className={stls.component}>
      <Wrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          navigation={false}
          onSwiper={swiper => (swiperRef.current = swiper)}>
          {data.map((elem, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{ backgroundImage: `url(${elem.bgImage})` }}
                className={cn(stls.slide, idx === 0 && stls.firstSlide)}>
                <div className={stls.content}>
                  <Title
                    fontSize={50}
                    color={elem.color}
                    className={stls.title}>
                    {elem.title}
                  </Title>
                  <div className={cn(stls.desc, stls[elem.color])}>
                    {elem.desc}
                  </div>
                  {idx !== 0 && idx !== 2 && idx !== 3 ? (
                    <Popup
                      trigger={
                        <UniversalButton
                          colorText='white'
                          borderColor='white'
                          borderPx={1}
                          className={stls.btn}>
                          Задать вопрос
                        </UniversalButton>
                      }
                      modal
                      nested>
                      {close => (
                        <PopupCta
                          title='Оставить заявку'
                          desc='Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши вопросы и решим проблему'
                          cta='Отправить'
                          close={close}
                          question={false}
                        />
                      )}
                    </Popup>
                  ) : (
                    <UniversalButton
                      colorText='white'
                      borderColor='white'
                      borderPx={idx !== 2 && idx !== 3 && 1}
                      className={cn(
                        stls.btn,
                        idx == 2 && stls.darkBlueBgBtn,
                        idx == 3 && stls.blueBgBtn
                      )}
                      linkTo={idx == 0 ? 'https://mrqz.me/68400939797a4b001843cfcc?utm_source=quizmipo&utm_medium=cpc&utm_campaign=bannersait' : '/programs'}>
                      Выбрать направление
                    </UniversalButton>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={stls.sliderControls}>
          <button onClick={handlePrev} className={stls.controlBtn}>
            <IconArrowRight classNames={[stls.left]}/>
          </button>
          <button onClick={handleNext} className={stls.controlBtn}>
            <IconArrowRight  />
          </button>
        </div>
      </Wrapper>
    </section>
  )
}
