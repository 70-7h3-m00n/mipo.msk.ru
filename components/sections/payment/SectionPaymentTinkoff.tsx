import stls from '@/styles/components/sections/payment/SectionPaymentTinkoff.module.sass'
import { useRouter } from 'next/router'
import Script from 'next/script'
import cn from 'classnames'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-nextjs-toast'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha, BtnBeta, BtnDelta, BtnGamma } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import { email } from '@/data/email'
import { number } from '@/data/contact'

type TFormValues = {
  programPrice: number
  contractNumber: string
  studentName: string
  studentEmail: string
  studentPhoneNumber: string
}

const SectionPaymentTinkoff = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<TFormValues>()

  //   <div className={stls.hiddenInputs}>
  //   <input
  //     className='tinkoffPayRow'
  //     type='hidden'
  //     name='terminalkey'
  //     value='1650440757930DEMO'
  //   />
  //   {/* <input
  //     className='tinkoffPayRow'
  //     type='hidden'
  //     name='reccurentPayment'
  //     value='true'
  //   />
  //   <input
  //     className='tinkoffPayRow'
  //     type='hidden'
  //     name='customerKey'
  //     value=''
  //   /> */}
  //   <input
  //     className='tinkoffPayRow'
  //     type='hidden'
  //     name='frame'
  //     value='false'
  //   />
  //   <input
  //     className='tinkoffPayRow'
  //     type='hidden'
  //     name='language'
  //     value='ru'
  //   />
  // </div>

  const onSubmit = async formValues => {
    console.log(formValues)
    try {
      const res = await axios.post('https://securepay.tinkoff.ru/v2/Init', {
        TerminalKey: '1650440757930DEMO',
        Amount: (Number(formValues?.programPrice) * 100).toString() || '',
        OrderId: formValues?.contractNumber?.toString() || '',
        Description: 'Оплата обучения в НАНО «МИПО»',
        Language: 'ru',
        DATA: {
          Phone: formValues?.studentPhoneNumber?.toString() || '',
          Email: formValues?.studentEmail?.toString() || ''
        }
        // Receipt: {
        //   Email: formValues?.studentEmail?.toString() || '',
        //   Phone: formValues?.studentPhoneNumber?.toString() || '',
        //   EmailCompany: email,
        //   Taxation: 'usn_income'
        // }
      })
      const data = res.data
      const paymentUrl = data.PaymentURL
      router.push(paymentUrl)
    } catch (err) {
      console.error(err)
      toast.notify(
        `Ошибка при оплате, пожалуйста свяжитесь с нами ${number.val}`,
        {
          title: 'Непредвиденная ошибка'
        }
      )
    }
  }

  return (
    <>
      <Script src='https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js' />
      <section className={stls.container}>
        <ToastContainer align='right' position='bottom' />
        <Wrapper>
          <h2 className={stls.title}>Оплата Тинькофф</h2>
          <form
            method='post'
            className={stls.form}
            onSubmit={handleSubmit(formValues => onSubmit(formValues))}>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input)}
                type='number'
                aria-label='Стоимость программы'
                placeholder='Стоимость программы'
                {...register('programPrice', {
                  required: '*Стоимость программы обязательна',
                  minLength: {
                    value: 3,
                    message: '*Не менее 3 символов'
                  },
                  maxLength: {
                    value: 64,
                    message: '*Не более 64 символов'
                  }
                })}
              />
              <p className={stls.err}>
                {errors.programPrice && errors.programPrice.message}
              </p>
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input)}
                type='text'
                aria-label='Номер договора'
                placeholder='Номер договора'
                {...register('contractNumber', {
                  required: '*Номер договора обязателен',
                  minLength: {
                    value: 4,
                    message: '*Не менее 4 символов'
                  },
                  maxLength: {
                    value: 64,
                    message: '*Не более 64 символов'
                  }
                })}
              />
              <p className={stls.err}>
                {errors.contractNumber && errors.contractNumber.message}
              </p>
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input)}
                type='text'
                aria-label='Ваше ФИО'
                placeholder='Ваше ФИО'
                {...register('studentName', {
                  required: '*Ваше ФИО обязательно',
                  minLength: {
                    value: 4,
                    message: '*Не менее 4 символов'
                  },
                  maxLength: {
                    value: 128,
                    message: '*Не более 128 символов'
                  }
                })}
              />
              <p className={stls.err}>
                {errors.studentName && errors.studentName.message}
              </p>
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input)}
                type='email'
                aria-label='Ваша электронная почта'
                placeholder='Ваша электронная почта'
                {...register('studentEmail', {
                  required: '*Ваша электронная почта обязательна',
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message:
                      '*Пожалуйста, введите корректный адрес электронной почты'
                  },
                  maxLength: {
                    value: 128,
                    message: '*Не более 128 символов'
                  }
                })}
              />
              <p className={stls.err}>
                {errors.studentEmail && errors.studentEmail.message}
              </p>
            </div>
            <div className={stls.inputGroup}>
              <input
                className={cn(stls.input)}
                type='tel'
                aria-label='Ваш номер телефона'
                placeholder='Ваш номер телефона'
                {...register('studentPhoneNumber', {
                  required: '*Ваш номер телефона обязательн',
                  minLength: {
                    value: 5,
                    message: '*Не менее 5 символов'
                  },
                  maxLength: {
                    value: 32,
                    message: '*Не более 32 символов'
                  }
                })}
              />
              <p className={stls.err}>
                {errors.studentPhoneNumber && errors.studentPhoneNumber.message}
              </p>
            </div>
            <div className={stls.inputGroup}>
              <BtnGamma text='Оплатить' />
            </div>
          </form>
        </Wrapper>
      </section>
    </>
  )
}

export default SectionPaymentTinkoff
