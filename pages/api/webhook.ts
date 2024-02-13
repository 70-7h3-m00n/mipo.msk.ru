import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const token = 'bbba3c91'

type TypeNextApiResponseLeadData = {
  readonly err?: unknown
  readonly msg: string
}

const webhook = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  if (req.body) process.env.TZ = 'Europe/Moscow'

  // console.log('%cwebhook.ts line:17 req.body', 'color: #007acc;', req.body)

  if (req.body) {
    const price = req?.body?.['leads[status][0][price]']
    const leadId = req?.body?.['leads[status][0][id]']
    const name = req?.body?.name
    const phone = req?.body?.phone
    const email = req?.body?.email

    try {
      const entries = Object.values(req.body)
      const clickIdIndex = entries?.findIndex(ell => ell === 'Клик ID')
      const clickId = clickIdIndex > 0 && entries?.[clickIdIndex + 1]
      const programTypeIndex = entries?.findIndex(item => item === 'Тип программы')
      const programType = programTypeIndex > 0 && entries?.[programTypeIndex + 1]
      const isEdpartnersFromAmocrm = entries.some(el => el === 'edpartners')

      if (isEdpartnersFromAmocrm && price > 0) {
        const responseApproved = await axios.get(
          `https://edpartners.scaletrk.com/track/conv?click_id=${clickId}&amount=${price}&token=${token}&adv_order_id=2&conv_status=approved&goal_alias=1`
        )

        const responseRejected = await axios.get(
          `https://edpartners.scaletrk.com/track/conv-change?click_id=${clickId}&token=${token}&adv_order_id=10&conv_status=rejected&goal_alias=3`
        )
      }

      const utmSource = req?.body?.utm_source
      const utmCampaign = req?.body?.utm_campaign
      const clUid = req?.body?.cl_uid

      if (utmSource === 'edpartners') {
        const response = await axios.get(
          `https://edpartners.scaletrk.com/track/conv?click_id=${clUid}&token=${token}&adv_order_id=2&conv_status=pending&goal_alias=2`
        )
      }
    } catch (e) {
      console.error(e, 'webhook error')
    }
  }
  res.status(200).json({ msg: 'success' })
}

export default webhook