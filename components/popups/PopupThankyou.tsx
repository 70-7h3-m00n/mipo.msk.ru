import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect, useContext, useState } from 'react'
import ProgramContext from '@/context/program/programContext'
import TagManager from 'react-gtm-module'
import { BtnClose } from '@/components/btns'
import { v4 as uuidv4 } from 'uuid'

const PopupThankyou = ({ close, id = null }) => {
  const { program } = useContext(ProgramContext)

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLeadFromLeadgid, setIsLeadFromLeadgid] = useState(false)

  const idThankyou = uuidv4()

  const atMba = program?.category?.type === 'mba'
  const atProfession = program?.category?.type === 'profession'

  useEffect(() => {
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    setIsLeadFromLeadgid(utms?.utm_source === 'LG')

    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id: id || idThankyou
            },
            products: [
              {
                id: (program && program._id) || (program && program.id) || null,
                name: (program && program.title) || null,
                price: (program && program.timenprice?.[0]?.ref?.price) || null,
                type: (program && program.category?.label) || null
              }
            ]
          }
        }
      },
      dataLayerName: 'dataLayer'
    }
    TagManager.dataLayer(tagManagerArgs)

    sessionStorage.removeItem('referer')
    sessionStorage.removeItem('utms')
    setIsSubmitted(true)
  }, [
    program,
    atMba,
    atProfession,
    isLeadFromLeadgid,
    id,
    idThankyou,
    setIsLeadFromLeadgid
  ])

  console.log(isLeadFromLeadgid)
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>Заявка отправлена</h3>
      <p className={stls.desc}>
        Мы свяжемся с Вами в рабочие часы в ближайшее время
      </p>
      <p className={stls.thanks}>Спасибо!</p>
      {isSubmitted &&
        (atMba && isLeadFromLeadgid ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=${
              id || idThankyou
            }`}
            width='1'
            height='1'
          />
        ) : atProfession && isLeadFromLeadgid ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_l?offer_id=5740&adv_sub=${
              id || idThankyou
            }`}
            width='1'
            height='1'
          />
        ) : null)}
    </div>
  )
}

export default PopupThankyou

// Cross-Origin Read Blocking (CORB) blocked cross-origin response https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=3d95d0c5-9cc5-4cef-879b-1e09c92d6e95 with MIME type text/html. See https://www.chromestatus.com/feature/5629709824032768 for more details.
