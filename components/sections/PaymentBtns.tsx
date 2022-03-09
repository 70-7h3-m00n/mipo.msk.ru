import stls from '@/styles/components/sections/PaymentBtns.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const PaymentBtns = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnAlpha
              text='Оплата банковской картой'
              href='https://3dsec.sberbank.ru/shortlink/hO9wklys'
              target='_blank'
            />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='delta' cta='help' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentBtns
