import Image from 'next/image'
import styles from './styles.module.scss'
import PaymentTab from '../../../data/paymentTab'
import classNames from 'classnames'
import FormApplication from '../../FormApplication'
import url from '@/assets/image/formApplication.png'
import urlT from '@/assets/image/t.png'
import urlDumbbells from '@/assets/image/dumbbells.png'

const Payment = () => {
  return (
    <section className={'container'}>
      <h2 className={'header'}>Первый платеж только через месяц</h2>

      <div className={styles.wrapperItems}>
        {
          PaymentTab.map((item, index) => (
            <div className={classNames(styles.cardItem, item.active && styles.active)}
                 key={index}
            >
              <div className={styles.counter}>{index + 1}</div>
              <div className={styles.text}>{item.title}</div>
            </div>
          ))
        }
      </div>

      <div className={styles.blockFormApplication}>
        <div className={styles.wrapperText}>
          <h3 className={styles.header}>ПОМОЧЬ В ПОДБОРЕ ПРОГРАММЫ</h3>

          <p className={styles.description}>
            Остались вопросы или не можете определиться с курсом? <br />
            Оставьте свои контакты, мы свяжемся с вами и все расскажем.
          </p>
        </div>

        <div className={styles.wrapperImage}>
          <Image src={url} alt={'image'} fill />
        </div>

        <Image className={styles.imageT}
               src={urlT}
               alt={'image'}
        />

        <Image className={styles.imageDumbbells}
               src={urlDumbbells}
               alt={'image'}
        />

        <div className={styles.wrapperForm}>
          <FormApplication />
        </div>
      </div>
    </section>
  )
}

export default Payment
