import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

import bellImg from '@/assets/image/bell.png';
import webinarsImg from '@/assets/image/webinar.png';
import ButtonLink from '@/components/ButtonLink';
import { formatDate } from '@/helpers/formatDate';
import { formatTime } from '@/helpers/formatTime';

import styles from './CardWebinars.module.scss';

type CardWebinarsProps = {
  title: string;
  data: string;
  speaker: string;
  setOpenPopUp: Dispatch<SetStateAction<boolean>>;
};

export const CardWebinars = ({
  title,
  data,
  speaker,
  setOpenPopUp,
}: CardWebinarsProps) => {
  const formattedDate = formatDate(data);
  const formattedTime = formatTime(data);

  return (
    <div className={styles.cardWebinars}>
      <div className={styles.top}>
        <div className={styles.timeBlock}>
          <time className={styles.time}>{formattedDate}</time>

          <time className={styles.time}>{formattedTime} МСК</time>
        </div>

        <Image className={styles.bellImage} src={bellImg} alt={'bell'} />
      </div>

      <div className={styles.bottom}>
        <Image
          className={styles.webinarImage}
          src={webinarsImg}
          alt={'webinar'}
        />

        <h2 className={styles.title}>{title}</h2>

        <p className={styles.speaker}>
          <span>Спикер: </span>
          {speaker}
        </p>

        <ButtonLink
          onClick={() => setOpenPopUp(true)}
          className={styles.btn}
          active
          text={'подробнее'}
          styleOption={'square'}
        />
      </div>
    </div>
  );
};
