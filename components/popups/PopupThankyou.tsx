import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect, useContext, useState } from 'react'
import ProgramContext from '@/context/program/programContext'
import TagManager from 'react-gtm-module'
import { BtnClose } from '@/components/btns'
import { v4 as uuidv4 } from 'uuid'

const PopupThankyou = ({ close }) => {
  const { program } = useContext(ProgramContext)

  const [isSubmitted, setIsSubmitted] = useState(false)

  const leadgidId = '64aaf194-9068-4d3a-a71a-b73323fca769'

  const atMba = program?.category?.type === 'mba'
  const atProfession = program?.category?.type === 'profession'

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id: uuidv4()
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

    setIsSubmitted(true)
  }, [program, atMba, atProfession])
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
      {/* {isSubmitted &&
        (atMba ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_goal?a=l&goal_id=5405&adv_sub=${leadgidId}`}
            width='1'
            height='1'
          />
        ) : atProfession ? (
          // eslint-disable-next-line
          <img
            src={`https://go.leadgid.ru/aff_l?offer_id=5740&adv_sub=${leadgidId}`}
            width='1'
            height='1'
          />
        ) : null)} */}
    </div>
  )
}

export default PopupThankyou
