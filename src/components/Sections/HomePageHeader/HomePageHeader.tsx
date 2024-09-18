import Image from 'next/image';
import Link from 'next/link';

import urlDesktop from '@/assets/image/header_home_page.png';
import urlMobile from '@/assets/image/mobile_home.png';

import styles from './HomePageHeader.module.scss';

export const HomePageHeader = () => {
  return (
    <section className={'container'}>
      <div className={styles.wrapperBlock}>
        <div className={styles.blockText}>
          <h2 className={styles.header}>
            <span>Онлайн-институт</span>
            <br />
            востребованных профессий
          </h2>

          <p className={styles.description}>
            Получи новую профессию или повысь квалификацию по своему нынешнему
            направлению дистанционно
          </p>

          <div className={styles.wrapperBtn}>
            <Link href={'/catalog'} className={styles.btnDirections}>
              Направления
            </Link>

            <Link href={'/about-university'} className={styles.btnQuestion}>
              Об университете
            </Link>
          </div>
        </div>

        <Image
          src={urlDesktop}
          className={styles.imageDesktop}
          alt={'headerImage'}
          priority
          sizes={''}
        />

        <Image
          src={urlMobile}
          className={styles.imageMobile}
          alt={'headerImage'}
          priority
          sizes={''}
        />
      </div>
    </section>
  );
};
