import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Title from '@/components/parts/Title'
import CardWithiImage from '@/components/cards/CardWithImage'
import { useEducation } from '@/context/highereducation/EducationContext'
import { useState } from 'react'
import UniversalButton from '@/components/btns/UniversalButton'
import { useKeenSlider } from 'keen-slider/react'
import ImagePartnerBlock from '@/components/cards/ImagePartnerBlock'

const TextBlockWithSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: { perView: 3, spacing: 15 },
    created(s) {
      setInterval(() => {
        s.next()
      }, 2000)
    }
  })
  return (
    <section className={stls.component}>
      <Wrapper classNames={[stls.wrapper]}>
        <Title as='h2' fontSize={44} className={stls.title}>
          Центр занятости студентов
        </Title>
        <p className={stls.text}>
          С 2004 года в нашем университете работает центр занятости, который
          помогает студентам и выпускникам написать резюме, пройти собеседование
          и найти престижную работу в крупных компаниях. Наши компании-партнеры
          участвуют в разработке учебных планов, организуют стажировки и
          стажировки для студентов.
        </p>
      </Wrapper>
      <div className={stls.sliders}>
        <div className={stls.sliderContainer}>
          <div className={stls.sliderTrackFirst}>
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/1.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/2.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/3.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/4.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/1.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/2.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/3.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/4.svg' />
          </div>
        </div>
        <div className={stls.sliderContainer}>
          <div className={stls.sliderTrackSecond}>
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/4.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/3.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/2.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/1.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/4.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/3.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/2.svg' />
            <ImagePartnerBlock imageSrc='/assets/imgs/hardereducation/iconspartners/1.svg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextBlockWithSlider
