import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import type { IImage } from '@/api/fetchProgramCourse/types';
import ApplicationsContent from '@/components/ApplicationsContent';
import { BannerDiscount } from '@/components/BannerDiscount/BannerDiscount';
import Modal from '@/components/Modal';

import styles from './Portfolio.module.scss';

type PortfolioProps = {
  portfolio: {
    profession: string;
    cost: string;
    description: string;
    skills: Array<{
      item: string;
    }>;
    image: IImage;
  };
  courseName: string;
};

export const Portfolio = ({ portfolio, courseName }: PortfolioProps) => {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <section className={'container'}>
      <h2 className={'header'}>
        ваше портфолио <br /> после обучения
      </h2>

      <div className={styles.portfolio}>
        <div className={styles.wrapperHeader}>
          <div className={styles.wrapperChild}>
            <div className={styles.wrapperImage}>
              <Image src={portfolio.image.url} fill alt={'image'} />
            </div>

            <h3 className={styles.courseName}>{courseName}</h3>

            <div className={styles.textSmall}>Профессия</div>
          </div>

          <div className={styles.wrapperChild}>
            <h4 className={styles.header}>
              МОСКОВСКИЙ ИНСТИТУТ ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ
            </h4>

            <div className={styles.textSmall}>Образование</div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div>
            <div className={styles.cost}>{portfolio.cost}</div>

            <div className={styles.textSmall}>средняя зарплата в РФ</div>
          </div>

          <div className={styles.textSmall}>{portfolio.description}</div>
        </div>

        <div className={classNames(styles.wrapper, styles.blockList)}>
          <h3 className={styles.header}>навыки</h3>

          <ul className={styles.list}>
            {portfolio.skills.slice(0, 5).map((item, i) => (
              <li className={styles.textSmall} key={i}>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BannerDiscount setOpenPopUp={setOpenPopUp} />

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'связаться с менджером'} />
      </Modal>
    </section>
  );
};
