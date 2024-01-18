import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect, useContext, useState } from 'react'
import ProgramContext from '@/context/program/programContext'
import TagManager from 'react-gtm-module'
import axios from 'axios'
import { BtnClose } from '@/components/btns'
import { UTM_KEYS_OBJ } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'
import { getCookie, getCookies } from 'cookies-next'
import { checkIsLeadFromAffise } from '@/utils/index'

const PopupThankyou = ({ close, id = null, clickid = null }) => {
  const { program } = useContext(ProgramContext)

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLeadFromLeadgid, setIsLeadFromLeadgid] = useState(false)
  const [isLeadFromAffise, setIsLeadFromAffise] = useState(false)
  const [userUuid, setUserUuid] = useState(null)

  const idThankyou = uuidv4()

  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'
  const atProfession = program?.category?.type === 'profession'

  console.log('popup thankyou id: ', id)

  useEffect(() => {
    const cookies = getCookies()
    const utm_source = cookies[UTM_KEYS_OBJ.utm_source]
    const clUid = cookies[UTM_KEYS_OBJ.cl_uid]

    setIsLeadFromLeadgid(isLeadFromLeadgid || utm_source === 'LG')
    setIsLeadFromAffise(checkIsLeadFromAffise(getCookies()))
    setUserUuid(JSON.parse(sessionStorage.getItem('user_uuid')))

    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id
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

    const sendLeadToAffise = async () => {
      const res = await axios.get(
        `https://edpartners.scaletrk.com/track/conv?click_id=${clUid}&token=${'bbba3c91'}&adv_order_id=2&conv_status=pending&goal_alias=2`
      )
      return res.data
    }

    if (isLeadFromAffise) sendLeadToAffise()

    sessionStorage.removeItem('referer')
    sessionStorage.removeItem('user_uuid')
    sessionStorage.setItem('user_uuid', JSON.stringify(uuidv4()))
    setIsSubmitted(true)
  }, [
    program,
    altStyles,
    atProfession,
    isLeadFromLeadgid,
    isLeadFromAffise,
    id,
    clickid
    // id,
    // idThankyou,
    // userUuid
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
      {isSubmitted &&
        (altStyles && isLeadFromLeadgid ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=${id}`}
            width='1'
            height='1'
          />
        ) : atProfession && isLeadFromLeadgid ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_l?offer_id=5740&adv_sub=${id}`}
            width='1'
            height='1'
          />
        ) : null)}
    </div>
  )
}

export default PopupThankyou

// Cross-Origin Read Blocking (CORB) blocked cross-origin response https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=3d95d0c5-9cc5-4cef-879b-1e09c92d6e95 with MIME type text/html. See https://www.chromestatus.com/feature/5629709824032768 for more details.
