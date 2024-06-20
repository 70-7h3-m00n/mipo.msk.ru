import styles from './styles.module.scss'
import Image from 'next/image'
import urlDesktop from '@/assets/image/header_home_page.png'
import urlMobile from '@/assets/image/mobile_home.png'

const HomePageHeader = () => {
  return (
    <section className={'container'}>
      <div className={styles.wrapperBlock}>
        <div className={styles.blockText}>
          <h2 className={styles.header}>
            <span>Онлайн-институт </span>
            <br />
            востребованных профессий
          </h2>

          <p className={styles.description}>
            Получи новую профессию или повысь квалификацию по
            своему нынешнему направлению дистанционно
          </p>

          <div className={styles.wrapperBtn}>
            <button className={styles.btnDirections}>Направления</button>

            <button className={styles.btnQuestion}>Задать вопрос</button>
          </div>
        </div>

        <Image src={urlDesktop}
               className={styles.imageDesktop}
               alt={'headerImage'}
               priority
        />

        <Image src={urlMobile}
               className={styles.imageMobile}
               alt={'headerImage'}
               priority
        />
      </div>
    </section>
  )
}

export default HomePageHeader
