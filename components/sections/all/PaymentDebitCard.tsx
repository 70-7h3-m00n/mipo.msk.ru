import stls from '@/styles/components/sections/all/PaymentDebitCard.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgOnlinePayment } from '@/components/imgs'
import { IconCircleCheck } from '../../icons'

const PaymentDebitCard = () => {
  const list = ['VISA International', 'Mastercard Worldwide', 'JCB', 'МИР']

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <h2 className={stls.title}>Банковской картой</h2>
          <p className={stls.p}>
            Для проведения оплаты обучения, с помощью банковской карты, ниже на
            этой странице необходимо нажать кнопку Оплата банковской картой.
            Оплата происходит через{' '}
            <strong className={stls.strong}>ПАО СБЕРБАНК</strong> с
            использованием банковских карт следующих платёжных систем:
          </p>
          <ul className={stls.list}>
            {list.map(item => (
              <li key={item} className={stls.item}>
                <div className={stls.icon}>
                  <IconCircleCheck inverse />
                </div>
                <span className={stls.text}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={stls.right}>
          <ImgOnlinePayment />
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentDebitCard
