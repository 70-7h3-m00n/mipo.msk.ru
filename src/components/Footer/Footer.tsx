import styles from './Footer.module.scss'
import Link from 'next/link'
import { MenuAboutInstitute } from '../../data/menu'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import ApplicationsContent from '../ApplicationsContent'
import { useAppSelector } from '@/state/hooks'
import LogoFooterSvg from '../../SvgComponents/LogoFooterSvg'
import MobileLogoFooterSvg from '../../SvgComponents/MobileLogoFooterSvg'
import EstimationSvg from '../../SvgComponents/EstimationSvg'

export const Footer = () => {
  const { facultyData } = useAppSelector(state => state.facultyReducer)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [toggleLogo, setToggleLogo] = useState(false)

  useEffect(() => {
    const toggleLogo = () => {
      setToggleLogo(matchMedia('(max-width: 769px)').matches)
    }
    toggleLogo()
    window.addEventListener('resize', toggleLogo)
    return () => window.removeEventListener('resize', toggleLogo)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={'container'}>
        <div className={styles.top}>
          <Link href={'/'} passHref>
            {
              toggleLogo ?
                <MobileLogoFooterSvg />
                :
                <LogoFooterSvg />
            }
          </Link>


          <div className={styles.wrapperMessenger}>
            <Link className={styles.telegramLink} href={'/'} passHref>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path
                  d="M21.9816 2.7784C22.1529 1.56539 21.0999 0.607947 20.1151 1.08149L0.501623 10.513C-0.204562 10.8526 -0.152903 12.0242 0.579517 12.2796L4.62425 13.6904C5.39632 13.9597 6.23218 13.8204 6.90634 13.3103L16.0256 6.41001C16.3006 6.20189 16.6004 6.63018 16.3654 6.89538L9.80112 14.3077C9.16436 15.0268 9.29072 16.2452 10.0567 16.7713L17.4061 21.8189C18.2304 22.385 19.2908 21.8164 19.445 20.7253L21.9816 2.7784Z"
                  fill="white" />
              </svg>
            </Link>

            <Link className={styles.vkLink} href={'/'} passHref>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                <path
                  d="M15.1383 7.71894C14.6811 7.54381 14.6811 6.87499 14.6528 6.40923C14.5385 4.75022 15.1099 2.21744 14.4242 1.14062C13.9387 0.499738 11.5954 0.558423 10.1673 0.645985C9.7669 0.70467 9.28142 0.791302 8.93856 0.966425C8.59571 1.14155 8.25286 1.43218 8.25286 1.69393C8.25286 2.07213 9.11045 2.01437 9.42404 2.509C9.7669 3.03344 9.7669 4.16802 9.7669 5.09953C9.7669 6.17636 9.59501 7.60343 9.16713 7.66118C8.50977 7.69006 8.13857 7.0203 7.79572 6.52567C7.11001 5.56529 6.42431 4.37109 5.90957 3.20671C5.65266 2.59563 5.50912 1.92588 5.13793 1.66413C4.5665 1.25612 3.53795 1.22725 2.53773 1.25612C1.62346 1.285 0.308729 1.16856 0.0518181 1.72188C-0.148408 2.33295 0.280387 2.91514 0.508955 3.41071C1.68014 6.00123 2.93727 8.27225 4.48056 10.4259C5.90957 12.4342 7.25173 14.0355 9.88027 14.8794C10.6236 15.1123 13.8802 15.7821 14.5376 14.8794C14.7661 14.5301 14.7095 13.7439 14.8237 13.1617C14.938 12.5796 15.0807 11.9974 15.6237 11.9685C16.0809 11.9396 16.3378 12.3467 16.624 12.6382C16.9385 12.9587 17.1954 13.2204 17.4239 13.512C17.967 14.0653 18.5384 14.8217 19.2241 15.1133C20.1668 15.5213 21.6241 15.4048 22.9955 15.3461C24.11 15.3173 24.91 15.0844 24.996 14.4146C25.0536 13.8902 24.4812 13.1338 24.1384 12.6969C23.2808 11.6201 22.8812 11.2997 21.9094 10.3095C21.4806 9.87259 20.9375 9.40683 20.9375 8.88332C20.9092 8.56288 21.1661 8.27225 21.3946 7.95181C22.3949 6.43811 23.3951 5.36129 24.3093 3.7889C24.5663 3.32314 25.1669 2.24632 24.9384 1.72188C24.6815 1.13969 23.2524 1.31388 22.3665 1.31388C21.2237 1.31388 19.738 1.22632 19.4518 1.45919C18.9087 1.83739 18.6802 2.44939 18.4232 3.03158C17.8518 4.37109 17.0802 5.73855 16.2802 6.75762C15.994 7.10694 15.4519 7.83444 15.1373 7.718L15.1383 7.71894Z"
                  fill="white" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.block_1}>
            <Link href={'/catalog'} className={styles.text}>все направления</Link>
            {
              facultyData?.map((item, index) => (
                <Link href={'/catalog/' + item.slug} className={styles.text} key={index}>{item.title}</Link>
              ))
            }
          </div>

          <div className={styles.block_2}>
            {
              MenuAboutInstitute.map((item, index) => (
                <Link className={styles.text} key={index} href={item.link}>{item.text}</Link>
              ))
            }
          </div>

          <div className={styles.block_3}>
            <div className={styles.text}>КОНТАКТЫ</div>
            <Link href={'tel:+74951509924'} className={styles.text}>+7 (495) 150-99-24</Link>
            <Link href={'mailto:info@mipo.msk.ru'} className={styles.text}>info@mipo.msk.ru</Link>
            <div className={styles.text}>Москва, Дербеневская набережная 11</div>
            <div className={styles.estimation}>
              <EstimationSvg />
            </div>
          </div>

          <div className={styles.block_4}>
            <h3 className={styles.header}>ПОМОЧЬ С ПОДБОРОМ ПРОГРАММЫ</h3>

            <p className={styles.description}>
              Оставьте свои контакты и наши специалисты проведут вам дистанционную экскурсию по нашим
              курсам, чтобы вы смогли выбрать именно тот, который отвечает вашим запросам
            </p>

            <button onClick={() => setOpenPopUp(true)}
                    className={styles.btnPopup}
            >
              подобрать программу
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.text}>
            Политика конфиденциальности
          </div>

          <div className={styles.text}>
            © 2024. Московский Институт Профессионального Образования
          </div>
        </div>
      </div>

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'появились сложности?'} />
      </Modal>
    </footer>
  )
}
