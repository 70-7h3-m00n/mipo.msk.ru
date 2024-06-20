import styles from './Discount.module.scss'
import React from 'react'
import classNames from 'classnames'

interface DiscountProps extends React.HTMLProps<HTMLDivElement> {
  discount: number
  price: number
  className?: string
}

export const Discount = ({ discount, price, className, ...props }:DiscountProps) => {
  const discountText = (((price / 100) * discount) + price)

  return (
    <div className={classNames(styles.wrapperDiscount, className)} {...props}>
      <div className={styles.wrapperPrice}>
        <div className={styles.text}>
                            <span style={{ textDecorationLine: 'line-through' }}>
                                {discountText?.toLocaleString('ru-RU')}
                            </span> ₽/мес
        </div>

        <div className={styles.textPrice}>
          {price?.toLocaleString('ru-RU')}<sup>₽&nbsp;/&nbsp;мес</sup>
        </div>

        <div className={styles.text}>Рассрочка на {12} месяца</div>
      </div>

      <div className={styles.wrapperIconDiscount}>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
          <path
            d="M23.2013 2.43695C23.6428 -0.812316 28.3572 -0.812316 28.7987 2.43695C29.1489 5.01354 32.5174 5.77977 33.9546 3.60974C35.767 0.873175 40.0145 2.91172 38.9977 6.03014C38.1914 8.50297 40.8928 10.6499 43.1324 9.31623C45.9568 7.63438 48.8961 11.3077 46.6224 13.6776C44.8194 15.5569 46.3185 18.6593 48.917 18.4262C52.1938 18.1321 53.2429 22.7127 50.1625 23.8648C47.7199 24.7783 47.7199 28.2217 50.1625 29.1352C53.2429 30.2873 52.1938 34.8679 48.917 34.5738C46.3185 34.3407 44.8194 37.4431 46.6224 39.3224C48.8961 41.6923 45.9568 45.3656 43.1324 43.6838C40.8928 42.3501 38.1914 44.497 38.9977 46.9699C40.0145 50.0883 35.767 52.1268 33.9546 49.3903C32.5174 47.2202 29.1489 47.9865 28.7987 50.563C28.3572 53.8123 23.6428 53.8123 23.2013 50.563C22.8511 47.9865 19.4826 47.2202 18.0454 49.3903C16.233 52.1268 11.9855 50.0883 13.0023 46.9699C13.8086 44.497 11.1072 42.3501 8.86758 43.6838C6.04324 45.3656 3.10386 41.6923 5.37761 39.3224C7.18064 37.4431 5.6815 34.3407 3.08303 34.5738C-0.193822 34.8679 -1.24287 30.2873 1.83748 29.1352C4.28013 28.2217 4.28013 24.7783 1.83748 23.8648C-1.24287 22.7127 -0.193822 18.1321 3.08303 18.4262C5.6815 18.6593 7.18064 15.5569 5.37761 13.6776C3.10386 11.3077 6.04324 7.63438 8.86758 9.31623C11.1072 10.6499 13.8086 8.50297 13.0023 6.03014C11.9855 2.91172 16.233 0.873176 18.0454 3.60974C19.4826 5.77977 22.8511 5.01354 23.2013 2.43695Z"
            fill="#3F3BFF" />
        </svg>

        <div className={styles.textIconDiscount}>-{discount}%</div>
      </div>
    </div>
  )
}
