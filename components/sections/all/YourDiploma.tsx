import stls from '@/styles/components/sections/all/YourDiploma.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import { ImgCertificate, ImgDiploma } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'
import { TypeCategory } from '@/types/index'

type YourDiplomaType = {
  ofType: TypeCategory
}

const YourDiploma = ({ ofType = null }: YourDiplomaType) => {
  const slides = []

  ofType === 'profession' && slides.push(<ImgDiploma key='diploma' />)
  ofType === 'course' && slides.push(<ImgCertificate key='certificate' />)
  ofType === 'mba' && slides.push(<ImgDiploma key='diploma' />)

  const mobileSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 10
  }
  const tabletSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 30
  }
  const laptopSwiperOptions = tabletSwiperOptions
  const desktopSwiperOptions = tabletSwiperOptions

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>Ваши будущие дипломы</h2>
            <div className={stls.subtitleContainer}>
              <p className={stls.subtitle}>
                Все наши программы лицензированы Департаментом образования
                города Москвы, поэтому дипломы ценится как клиентами, так и
                профессиональным сообществом!
              </p>

              <div className={stls.desktopBtnContainer}>
                <PopupTrigger btn='alpha' cta='learnAboutUs' />
              </div>
            </div>
          </div>
          <div className={stls.swiper}>
            <SwiperContainer
              diplomas
              slides={slides}
              mobileOptions={mobileSwiperOptions}
              tabletOptions={tabletSwiperOptions}
              laptopOptions={laptopSwiperOptions}
              desktopOptions={desktopSwiperOptions}
            />
          </div>
          <div className={stls.mobileBtnContainer}>
            <PopupTrigger btn='alpha' cta='learnAboutUs' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
