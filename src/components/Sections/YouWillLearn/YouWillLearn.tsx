import classNames from 'classnames';
import { useEffect, useState } from 'react';

import ButtonLink from '@/components/ButtonLink';
import { useAppSelector } from '@/state/hooks';

import styles from './YouWillLearn.module.scss';

export const YouWillLearn = () => {
  const { courseData } = useAppSelector(state => state.courseReducer);
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  const isMobileChange = () => {
    setIsMobile(matchMedia('(max-width: 769px)').matches);
  };

  useEffect(() => {
    setIsMobile(matchMedia('(max-width: 769px)').matches);

    window.addEventListener('resize', () => isMobileChange());

    return () => window.removeEventListener('resize', isMobileChange);
  }, []);

  return (
    <section className={styles.bgYouWillLearn}>
      <div className={'container'}>
        <h2 className={classNames('header', styles.headerYouWillLearn)}>
          чему вы научитесь
        </h2>

        <div className={styles.listYouWillLearn}>
          {isMobile === true &&
            courseData?.youWillLearn
              .filter((_, index) => index + 1 <= 5)
              .map(item => (
                <div className={styles.cardYouWillLearn} key={item.id}>
                  <div className={styles.bgCircle} />
                  <h4 className={styles.headerYouWillLearn}>{item.item}</h4>
                </div>
              ))}
          {isMobile === false &&
            courseData?.youWillLearn.map(item => (
              <div className={styles.cardYouWillLearn} key={item.id}>
                <div className={styles.bgCircle} />
                <h4 className={styles.headerYouWillLearn}>{item.item}</h4>
              </div>
            ))}
        </div>

        <ButtonLink
          className={styles.btnMobile}
          text={'Задать вопрос'}
          styleOption={'square'}
        />
      </div>
    </section>
  );
};
