import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect, useContext, useState } from 'react'
import ProgramContext from '@/context/program/programContext'
import TagManager from 'react-gtm-module'
import { BtnClose } from '@/components/btns'
import { UTM_KEYS_OBJ } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'
import { getCookie, getCookies } from 'cookies-next'
import { checkIsLeadFromAffise } from '../../src/utils/index'

const PopupThankyou = ({ close, id = null, clickid = null }: any) => {
  const { program } = useContext(ProgramContext)

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLeadFromLeadgid, setIsLeadFromLeadgid] = useState(false)
  const [isLeadFromAffise, setIsLeadFromAffise] = useState(false)
  const [userUuid, setUserUuid] = useState(null)

  useEffect(() => {
    const cookies = getCookies()
    const utm_source = cookies[UTM_KEYS_OBJ.utm_source]
    const clUid = cookies[UTM_KEYS_OBJ.cl_uid]

    setIsLeadFromLeadgid(isLeadFromLeadgid || utm_source === 'LG')
    setIsLeadFromAffise(checkIsLeadFromAffise(getCookies()))

    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id
            },
            products: [
            ]
          }
        }
      },
      dataLayerName: 'dataLayer'
    }
    TagManager.dataLayer(tagManagerArgs)

    sessionStorage.removeItem('referer')
    sessionStorage.removeItem('user_uuid')
    sessionStorage.setItem('user_uuid', JSON.stringify(uuidv4()))
    setIsSubmitted(true)
  }, [
    program,
    isLeadFromLeadgid,
    isLeadFromAffise,
    id,
    clickid
  ])

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
    </div>
  )
}

export default PopupThankyou

// Cross-Origin Read Blocking (CORB) blocked cross-origin response https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=3d95d0c5-9cc5-4cef-879b-1e09c92d6e95 with MIME type text/html. See https://www.chromestatus.com/feature/5629709824032768 for more details.
