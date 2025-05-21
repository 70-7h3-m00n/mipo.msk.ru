import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProgramContext from '@/context/program/programContext'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'
import { PopupThankyou } from '@/components/popups'
import { getCookie } from 'cookies-next'
import { routesFront, UTM_KEYS, UTM_KEYS_OBJ } from '@/config/index'
import axios from 'axios'
import { discountNum } from '@/data/price'
import roundingUpPriceOrNumber from '@/helpers/roundingUpPriceOrNumber'

type FormValues = {
  name: string
  phone: string
  email: string
  post_promocode: string
  question: string
  leadPage: string
  formName?: string | null
  webinarData?: { name: string; date: string; type: string }
}

const FormAlpha = ({
  cta = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false,
  formName = null,
  tarifPhycho = '',
  webinarData = null
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<FormValues>()

  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)
  const [userUuid, setUserUuid] = useState(null)
  const [id, setId] = useState(() => uuidv4())
  const [clickid, setClickid] = useState(() => uuidv4())
  const [leadIsSentTimeout, setLeadIsSentTimeout] = useState(false)
  const [textButton, setTextButton] = useState<null | string>(cta)
  const { program } = useContext(ProgramContext)
  const [hasItBeenSentBefore, setHasItBeenSentBefore] = useState<boolean>(false)

  const price =
    (program?.timenprice && Number(program?.timenprice?.[0]?.price)) || 0
  const discount =
    (program?.timenprice && Number(program?.timenprice?.[0]?.discount)) ||
    discountNum

  let priceWithoutCeil = Math.round(Math.ceil((price / (100 - discount)) * 100))
  priceWithoutCeil = Math.round(priceWithoutCeil * 1.17 * 1.69)

  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  useEffect(() => {
    popup && setFocus('name')
    setUserUuid(JSON.parse(sessionStorage.getItem('user_uuid')))
  }, [setFocus, popup])

  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('timeAfterSend')) return
    const diff =
      (new Date().getTime() -
        new Date(localStorage.getItem('timeAfterSend')).getTime()) /
      1000 /
      60
    if (diff < 5) {
      const remainsTime = Math.round(5 - diff)
      const timestr =
        remainsTime < 1 ? `несколько секунд` : `${remainsTime} мин`
      const str = `Ваша заявка отправлена, повтор через ${timestr}`
      setHasItBeenSentBefore(true)
      setIsDisabled(true)
      setTextButton(str)
    }
  }, [cta])

  const { query } = useRouter()

  const onSubmit = async data => {
    if (hasItBeenSentBefore) return
    localStorage.setItem('timeAfterSend', new Date().toISOString())

    let price
    if (Array.isArray(program?.timenprice) && program.timenprice[0]?.price) {
      price = +program.timenprice[0].price
    } else {
      price = null
    }
    setIsDisabled(true)
    setThanksIsOpen(true)
    // handle loader
    data.leadpage = router.asPath
    const utms = UTM_KEYS.reduce(
      (acc, cur) => ({ ...acc, [cur]: getCookie(cur) }),
      {} as { [key in (typeof UTM_KEYS)[number]]: string | undefined }
    )

    data.utms = utms
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    data.referer = referer
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
    const userUuid = JSON.parse(sessionStorage.getItem('user_uuid'))

    if (leadIsSentTimeout) return

    const title = program?.title ?? null
    const category = program?.study_field?.title ?? null
    const priceProduct =
      roundingUpPriceOrNumber(priceWithoutCeil * 0.35) ?? null

    const req = await hitContactRoute({
      ...data,
      id,
      ymUid,
      clickid,
      formName,
      tarifPhycho: tarifPhycho || undefined,
      click_id: query.click_id || undefined,
      name_programm: title,
      category_programm: category,
      price_programm: priceProduct,
      full_link: window.location.href,
      webinarData
    })

    try {
      await axios.post(`${routesFront.root}/api/webhook`, utms)
    } catch (e) {
      console.log(e, 'submit-webhook')
    }

    if (req === 200) {
      console.log('Success')
      setLeadIsSentTimeout(true)
      setTimeout(() => {
        setLeadIsSentTimeout(false)
      }, 5000)
    } else {
      console.log('err')
    }

    // Отключена ЮКасса с переходом
    // if (!question && price !== null) {
    //   try {
    //     const res = await axios.post(`${routesFront.root}/api/yookassa`, {
    //       price,
    //       returnURL: router.asPath,
    //       name: data.name,
    //       phone: data.phone,
    //       programTitle: program.title,
    //       email: data.email
    //     })

    //     if (res.status === 200) {
    //       window.open(res.data.url, '_blank')
    //     }
    //   } catch (e) {
    //     console.log(e, 'yookassa-error')
    //   }
    // }
  }

  return (
    <>
      <Popup
        open={thanksIsOpen}
        closeOnDocumentClick
        onClose={() => setThanksIsOpen(false)}>
        <PopupThankyou
          close={() => setThanksIsOpen(false)}
          id={id}
          clickid={clickid}
        />
      </Popup>
      <form
        method='post'
        className={classNames(stls.container, {
          [stls.atFooter]: atFooter,
          [stls.altStyles]: altStyles
        })}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
              disabled={isDisabled}
              {...register('name', {
                required: `*Укажите свое имя`,
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.name && errors.name.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.phone)}>
            <input
              type='tel'
              aria-label='Ваш номер телефона'
              placeholder='Ваш телефон'
              disabled={isDisabled}
              {...register('phone', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 5,
                  message: `*Минимум 5 цифр`
                }
              })}
            />
            <p className={stls.err}>{errors.phone && errors.phone.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Ваша электронная почта'
              disabled={isDisabled}
              {...register('email', {
                required: `*Электронная почта обязательна`,
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message:
                    '*Пожалуйста, введите корректный адрес электронной почты'
                },
                maxLength: {
                  value: 75,
                  message: `*Максимальная длинна промокода 75 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.promocode)}>
            <input
              type='text'
              aria-label='Промокод'
              placeholder='Промокод'
              disabled={isDisabled}
              {...register('post_promocode', {
                maxLength: {
                  value: 50,
                  message: `*Максимальная длинна промокода 50 символов`
                }
              })}
            />
            <p className={stls.err}>
              {errors.post_promocode && errors.post_promocode.message}
            </p>
          </div>
          {question && (
            <div className={classNames(stls.inpt, stls.question)}>
              <textarea
                aria-label='Задайте Ваш вопрос'
                placeholder='Задайте Ваш вопрос'
                disabled={isDisabled}
                {...register('question', {
                  maxLength: {
                    value: 320,
                    message: `*Максимальная длинна вопроса 320 символов`
                  }
                })}></textarea>
              <p className={stls.err}>
                {errors.question && errors.question.message}
              </p>
            </div>
          )}

          <div className={stls.btn}>
            {atFooter ? (
              <BtnBeta text={textButton} isDisabled={isDisabled} />
            ) : (
              <BtnAlpha text={textButton} isDisabled={isDisabled} />
            )}
          </div>

          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
              персональных данных
            </p>
          )}
        </div>
      </form>
    </>
  )
}

export default FormAlpha
