import stls from '@/styles/components/sections/payment/SectionPaymentTinkoff.module.sass'
import { useRouter } from 'next/router'
import Script from 'next/script'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha, BtnBeta, BtnDelta, BtnGamma } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const SectionPaymentTinkoff = () => {
  const router = useRouter()

  const handleSubmit = e => {
    try {
      // @ts-ignore
      pay(e)
      return false
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Script src='https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js' />
      <section className={stls.container}>
        <Wrapper>
          <h2 className={stls.title}>Оплата Тинькофф</h2>
          <form
            name='TinkoffPayForm'
            onSubmit={handleSubmit}
            className={stls.form}>
            <div className={stls.hiddenInputs}>
              <input
                className='tinkoffPayRow'
                type='hidden'
                name='terminalkey'
                value='1650440757930DEMO'
              />
              {/* <input
                className='tinkoffPayRow'
                type='hidden'
                name='reccurentPayment'
                value='true'
              />
              <input
                className='tinkoffPayRow'
                type='hidden'
                name='customerKey'
                value=''
              /> */}
              <input
                className='tinkoffPayRow'
                type='hidden'
                name='frame'
                value='false'
              />
              <input
                className='tinkoffPayRow'
                type='hidden'
                name='language'
                value='ru'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='Сумма заказа'
                name='amount'
                required
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='Номер заказа'
                name='order'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='Описание заказа'
                name='description'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='ФИО плательщика'
                name='name'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='E-mail'
                name='email'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input, 'tinkoffPayRow')}
                type='text'
                placeholder='Контактный телефон'
                name='phone'
              />
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.submitBtn, 'tinkoffPayRow')}
                type='submit'
                value='Оплатить'
              />
            </div>
          </form>
        </Wrapper>
      </section>
    </>
  )
}

export default SectionPaymentTinkoff
