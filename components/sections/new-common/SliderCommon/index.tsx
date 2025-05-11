import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Wrapper from '@/components/layout/Wrapper'
import Title from '@/components/parts/Title'
import stls from './index.module.sass'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import UniversalButton from '@/components/btns/UniversalButton'
import { PopupCta } from '@/components/popups'

type SliderElement = {
  title: string
  desc: string
  bgImage: string
  color: 'black' | 'grey' | 'white' | 'purple'
}

export default function MySlider() {
  const data: SliderElement[] = [
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

  return (
    <section className={stls.component}>
      <Wrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}>
          {data.map((elem, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{ backgroundImage: `url(${elem.bgImage})` }}
                className={stls.slide}>
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
                  {idx !== 1 && idx !== 2 ? (
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
                      borderPx={idx !== 1 && idx !== 2 && 1}
                      className={cn(
                        stls.btn,
                        idx == 1 && stls.darkBlueBgBtn,
                        idx == 2 && stls.blueBgBtn
                      )}
                      linkTo='/programs'>
                      Выбрать направление
                    </UniversalButton>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}
