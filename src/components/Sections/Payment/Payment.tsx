import Image from 'next/image';
import Link from 'next/link';

import urlDumbbells from '@/assets/image/dumbbells.png';
import url from '@/assets/image/formApplication.png';
import urlT from '@/assets/image/t.png';
import FormApplication from '@/components/FormApplication';
import { CardCounter } from '@/components/Items/CardCounter/CardCounter';
import PaymentTab from '@/data/paymentTab';

import styles from './Payment.module.scss';

export const Payment = () => {
  return (
    <section className={'container'}>
      <h2 className={'header'}>Первый платеж только через месяц</h2>

      <div className={styles.wrapperItems}>
        {PaymentTab.map((item, index) => (
          <CardCounter
            count={index + 1}
            title={item.title}
            active={item.active}
            key={index}
          />
        ))}
      </div>

      <div className={styles.blockFormApplication}>
        <div className={styles.wrapperText}>
          <h3 className={styles.header}>ПОМОЧЬ В ПОДБОРЕ ПРОГРАММЫ</h3>

          <p className={styles.description}>
            Остались вопросы или не можете определиться с курсом? Оставьте свои
            контакты, мы свяжемся с вами и все расскажем.
          </p>
        </div>

        <div className={styles.wrapperImage}>
          <Image src={url} alt={'image'} fill sizes={''} />
        </div>

        <Image className={styles.imageT} src={urlT} alt={'image'} sizes={''} />

        <Image
          className={styles.imageDumbbells}
          src={urlDumbbells}
          alt={'image'}
          sizes={''}
        />

        <div className={styles.wrapperForm}>
          <FormApplication textBtn={'подобрать программу'} />
          <p className={styles.textPolitika}>
            Оформляя заявку, я согласен &nbsp;
            <Link href={'/'} target={'_blank'}>
              с политикой конфиденциальности и офертой
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
