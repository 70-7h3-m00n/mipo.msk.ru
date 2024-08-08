import styles from './FormApplication.module.scss'
import { HTMLProps } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { routesFront, UTM_KEYS } from '../../config'
import { getCookie } from 'cookies-next'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { phoneExp, emailExp } from '../../shared/regExp'
import { createHash } from 'crypto'

type UTM_KEYS = { [key in (typeof UTM_KEYS)[number]]: string | undefined }

type FormValues = {
  name: string
  phone: string
  email: string
  promocode?: string,
  leadPage?: string
  utms?: UTM_KEYS
  referer?: string | undefined
  ymUid: string | undefined
}

interface FormApplicationProps extends HTMLProps<HTMLFormElement> {
  textBtn: string
  className?: string
}

export const FormApplication = ({ textBtn, className, ...props } : FormApplicationProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onBlur'
  })

  const router = useRouter()

  const onSubmit = async (data: FormValues) => {
    const id = createHash('sha256').update(data.phone).digest('hex')
    data.leadPage = router.asPath
    data.utms = UTM_KEYS.reduce((acc, cur) => ({ ...acc, [cur]: getCookie(cur) }),
      {} as UTM_KEYS
    )
    data.referer = JSON.parse(sessionStorage.getItem('referer')!)
    data.ymUid = JSON.parse(localStorage.getItem('_ym_uid')!)

    try {
      await axios.post(`${routesFront.root}/api/lead`, {
        ...data,
        id
      })
      reset()
    } catch (e) {
      console.log(e, 'submit')
    }

    try {
      await axios.post(`${routesFront.root}/api/webhook`, data.utms)
    }catch (e) {
      console.log(e, 'submit-webhook')
    }
  }

  return (
    <form className={classNames(styles.form, className)}
          onSubmit={handleSubmit(data => onSubmit(data))}
          {...props}
    >
      <div className={styles.wrapperInput}>
        <label htmlFor={'name'}>{errors.name?.message}</label>

        <input className={styles.input}
               placeholder={'Ваше имя'}
               type={'text'}
               {...register('name', {
                 maxLength: {
                   value: 32,
                   message: `*Не больше 32 символов`,
                 },
               })}
        />
      </div>

      <div className={styles.wrapperInput}>
        <label htmlFor={'phone'}>{errors.phone?.message}</label>

        <input className={styles.input}
               type="tel"
               placeholder={'+7 (999) 99-999-99'}
               {...register('phone', {
                 required: `Номер телефона обязателен`,
                 pattern: {
                   value: phoneExp,
                   message: 'Телефон не соотвествует номерам телефона РФ',
                 },
               })}
        />
      </div>

      <div className={styles.wrapperInput}>
        <label htmlFor={'email'}>{errors.email?.message}</label>

        <input className={styles.input}
               placeholder={'Ваш email'}
               type={'email'}
               {...register('email', {
                 pattern: {
                   value: emailExp,
                   message: 'email введен не коректно ',
                 },
               })}
        />
      </div>

      <div className={styles.wrapperInput}>
        <label htmlFor={'promocode'}>{errors.promocode?.message}</label>

        <input className={styles.input}
               placeholder={'Промокод'}
               type="text"
               {...register('promocode', {
                 maxLength: {
                   value: 50,
                   message: `*Максимальная длинна промокода 50 символов`,
                 },
               })}
        />
      </div>

      <button className={styles.btn}
              disabled={!isValid}
      >
        {textBtn}
      </button>
    </form>
  )
}
