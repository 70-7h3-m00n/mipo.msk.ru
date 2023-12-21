import styles from '@/styles/components/cards/CardDiscount.module.sass'
import DiscountSvg from '@/components/svg/DiscountSvg'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import classNames from 'classnames'

const CardDiscount = () => {
  return (
    <div className={styles.cardDiscountContainer}>
      <div className={classNames('container', styles.wrapper)}>
        <DiscountSvg className={styles.discountSvg} />

        <div className={styles.wrapperImg}>
          <p className={styles.text}>Скидки до 40% на новые знания</p>

          <BtnNewCourse text={'Записаться на курс'} className={styles.btn} />
        </div>
      </div>
    </div>
  )
}

export default CardDiscount
