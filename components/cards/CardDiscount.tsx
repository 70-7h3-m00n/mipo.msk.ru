import React from 'react'
import styles from '@/styles/components/cards/CardDiscount.module.sass'
import DiscountSvg from '@/components/svg/DiscountSvg'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import classNames from 'classnames'

const CardDiscount = () => {
  return (
    <div className={styles.cardDiscountContainer}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperImg}>
            <DiscountSvg />
          </div>

          <p className={styles.text}>
            Скидки до 40% на новые знания
          </p>
        </div>

        <BtnNewCourse text={'Записаться на курс'} />
      </div>
    </div>
  )
}

export default CardDiscount
