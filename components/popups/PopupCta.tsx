import stls from '@/styles/components/popups/PopupCta.module.sass'
import { FC, ReactElement, MouseEventHandler } from 'react'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'

type TPopupCta = {
  title?: string | ReactElement
  desc?: string | ReactElement
  cta?: string
  close: MouseEventHandler
  question?: boolean
}

const PopupCta: FC<TPopupCta> = ({
  title = 'Оставить заявку',
  desc = 'Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши вопросы и решим проблему',
  cta = 'Отправить',
  close,
  question = false
}) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>{title}</h3>
      <p className={stls.desc}>{desc}</p>
      <div className={stls.form}>
        <FormAlpha cta={cta} question={question} popup={true} />
      </div>
    </div>
  )
}

export default PopupCta
