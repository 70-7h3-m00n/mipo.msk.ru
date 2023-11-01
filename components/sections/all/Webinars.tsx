import stls from '@/styles/components/sections/all/Webinars.module.sass'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardWebinar from '@/components/cards/CardWebinar'
import CardSchedule from '@/components/cards/CardSchedule'
import ImgPortrait1 from '@/components/imgs/webinars/ImgPortrait1'
import ImgPortrait2 from '@/components/imgs/webinars/ImgPortrait2'
import ImgPortrait3 from '@/components/imgs/webinars/ImgPortrait3'
import classNames from 'classnames'

type WebinarsType = {
  standalone?: boolean
}

const Webinars = ({ standalone = false }: WebinarsType) => {
  const webinars = [
    {
      date: {
        day: '28',
        month: 'сент.',
        time: '20:00',
        weekday: 'Понедельник'
      },
      name: 'Светлана Сергеева',
      photo: <ImgPortrait1 />,
      topic: 'Исследуем аудиторию и разрабатываем учебную программу',
      bgColor: 'cepsilon'
    },
    {
      date: {
        day: '14',
        month: 'сент.',
        time: '13:00',
        weekday: 'Вторник'
      },
      name: 'Селиванов Иван',
      photo: <ImgPortrait2 />,
      topic: 'Создаём продающий контент',
      bgColor: 'csigma',
      hex: '#F5FCFE'
    },
    {
      date: {
        day: '12',
        month: 'сент.',
        time: '20:00',
        weekday: 'Понедельник'
      },
      name: 'Сухарев Марк',
      photo: <ImgPortrait3 />,
      topic: 'Погружаемся в машинное обучение',
      bgColor: 'cpi'
    }
  ]

  const webinarsSlides = webinars.map((data, idx) => (
    <CardWebinar key={data.topic + idx} webinarData={data} />
  ))

  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' })

  if (!isMobileLayout) webinarsSlides.push(<CardSchedule />)

  const mobileSwiperOptions = {
    slidesNum: 1.2,
    spaceBetween: 10
  }

  const tabletSwiperOptions = {
    slidesNum: 1.6,
    spaceBetween: 10
  }

  const laptopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 30
  }

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <h2 className={stls.title}>Ежедневные вебинары</h2>
        <p className={stls.desc}>
          С понедельника по четверг в институте проходят онлайн вебинары на
          самые актуальные темы и в удобном формате
        </p>
        <div className={stls.cards}>
          <SwiperContainer
            slides={webinarsSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
          />
        </div>
        {isMobileLayout && <CardSchedule mobileLayout />}
      </Wrapper>
    </section>
  )
}

export default Webinars
