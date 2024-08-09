import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

import srcDesktop from '@/assets/image/BannerDiscountDesc.png';
import srcMobile from '@/assets/image/BannerDiscountMobil.png';
import ButtonLink from '@/components/ButtonLink';

import styles from './BannerDiscount.module.scss';

type BannerDiscountProps = {
  setOpenPopUp: Dispatch<SetStateAction<boolean>>;
};

export const BannerDiscount = ({ setOpenPopUp }: BannerDiscountProps) => {
  return (
    <div className={styles.bannerDiscount}>
      <div className={styles.wrapperContent}>
        <h3 className={styles.header}>Начните обучаться со скидкой</h3>

        <h4 className={styles.subHeader}>
          Забронируйте программу по спеццене — со скидкой 40%
        </h4>
      </div>

      <div className={styles.wrapperBtn}>
        <ButtonLink
          className={styles.btn}
          onClick={() => setOpenPopUp(true)}
          text={'забронировать'}
          styleOption={'square'}
        />
      </div>

      <Image className={styles.imageDesktop} src={srcDesktop} alt={'img'} />

      <Image className={styles.imageMobile} src={srcMobile} alt={'img'} />
    </div>
  );
};
