/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { BtnEpsilon } from '@/components/btns'

declare global {
  interface Window {
    cp: any
  }
}

const CloudPayments = () => {
  const [count, setCount] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const onSend = async () => {
    if (!count || !email) return

    var payments = new window.cp.CloudPayments({
      language: 'ru-RU',
      email: email,
      applePaySupport: true,
      googlePaySupport: true,
      yandexPaySupport: true,
      tinkoffPaySupport: true,
      tinkoffInstallmentSupport: true,
      sbpSupport: true
    })

    payments
      .pay('charge', {
        publicId: 'pk_dda7d8ad6d49f0963e83a723dde1f',
        description: 'Оплата МИПО',
        amount: Number(count),
        currency: 'RUB',
        invoiceId: '123',
        accountId: '123',
        email: email,
        skin: 'classic',
        requireEmail: false
      })
      .then(function (widgetResult) {
        console.log('result', widgetResult)
      })
      .catch(function (error) {
        console.log('error', error)
      })
  }
  return (
    <div className={cn(styles.container)}>
      <Wrapper>
        <h2 className={styles.title}>Оплата при помощи CloudPayments</h2>
        <div className={styles.form}>
          <input
            type='number'
            min={0}
            value={count}
            onChange={e => setCount(e.target.value)}
            placeholder='Введите сумму'
          />
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Введите email'
          />
          <BtnEpsilon text='Оплатить' onSend={onSend} />
        </div>
      </Wrapper>
    </div>
  )
}

export default CloudPayments
