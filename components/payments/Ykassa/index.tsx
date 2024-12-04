/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'

const YKassaForm = () => {
  useEffect(() => {
    // Подключаем скрипт динамически
    const script = document.createElement('script')
    script.src =
      'https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.19.0'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className={cn(styles.container)}>
      <Wrapper>
        <h2 className={styles.title}>Оплата ЮКасса</h2>
        {/* Подключение стилей */}
        <link
          rel='stylesheet'
          href='https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css?v=1.19.0'
        />
        {/* Форма */}
        <form
          className='yoomoney-payment-form'
          action='https://yookassa.ru/integration/simplepay/payment'
          method='post'
          acceptCharset='utf-8'>
          {/* Блок информации о покупателе */}
          <div className='ym-customer-info'>
            <div className='ym-block-title'>О покупателе</div>
            <input
              name='cps_email'
              className='ym-input'
              placeholder='Email'
              type='text'
              defaultValue=''
            />
            <input
              name='cps_phone'
              className='ym-input'
              placeholder='Телефон'
              type='text'
              defaultValue=''
            />
            <input
              name='custName'
              className='ym-input'
              placeholder='ФИО'
              type='text'
              defaultValue=''
              required
            />
            <textarea
              className='ym-textarea'
              name='orderDetails'
              placeholder='Комментарий'
              defaultValue=''
            />
          </div>

          {/* Скрытые поля (пустые) */}
          <div className='ym-hidden-inputs'></div>

          {/* Блок кнопки оплаты */}
          <div className='ym-payment-btn-block ym-before-line ym-align-space-between'>
            <div className='ym-input-icon-rub'>
              <input
                name='sum'
                placeholder='0.00'
                className='ym-input ym-sum-input ym-required-input'
                type='number'
                step='any'
                required
              />
            </div>
            <button
              data-text='Заплатить'
              className='ym-btn-pay ym-result-price'>
              <span className='ym-text-crop'>Заплатить</span>{' '}
              <span className='ym-price-output'></span>
            </button>
            <img
              src='https://yookassa.ru/integration/simplepay/img/iokassa-gray.svg?v=1.19.0'
              className='ym-logo'
              width='114'
              height='27'
              alt='ЮKassa'
            />
          </div>

          {/* Скрытое поле shopId */}
          <input name='shopId' type='hidden' value='427087' />
        </form>
      </Wrapper>
    </div>
  )
}

export default YKassaForm
