import stls from '@/styles/components/sections/payment/SectionPaymentTinkoff.module.sass'
import Script from 'next/script'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const SectionPaymentTinkoff = () => {
  const handleSubmit = e => {
    pay(this)
    return false
  }
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Оплата Тинькофф</h2>
        <Script src='https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js' />
        <form
          name='TinkoffPayForm'
          onSubmit={handleSubmit}
          className={stls.form}>
          <input
            className={stls.input}
            type='hidden'
            name='terminalkey'
            value='TinkoffBankTest'
          />
          <input
            className={stls.input}
            type='hidden'
            name='frame'
            value='true'
          />
          <input
            className={stls.input}
            type='hidden'
            name='language'
            value='ru'
          />
          <input
            className={stls.input}
            type='text'
            placeholder='Сумма заказа'
            name='amount'
            required
          />
          <input
            className={stls.input}
            type='text'
            placeholder='Номер заказа'
            name='order'
          />
          <input
            className={stls.input}
            type='text'
            placeholder='Описание заказа'
            name='description'
          />
          <input
            className={stls.input}
            type='text'
            placeholder='ФИО плательщика'
            name='name'
          />
          <input
            className={stls.input}
            type='text'
            placeholder='E-mail'
            name='email'
          />
          <input
            className={stls.input}
            type='text'
            placeholder='Контактный телефон'
            name='phone'
          />
          <input className={stls.submitBtn} type='submit' value='Оплатить' />
        </form>
      </Wrapper>
    </section>
  )
}

export default SectionPaymentTinkoff
