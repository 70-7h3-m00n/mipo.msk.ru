import axios from 'axios'
import { routesFront } from '@/config/index'

const sendSravniRequest = async (click_id: string) => {
  try {
    const sravniRes = await axios.get(
      `https://sravni.go2cloud.org/aff_lsr?offer_id=2450&transaction_id=${click_id}`
    )
    console.log('Sravni request successful:', sravniRes.data)
  } catch (error) {
    console.error('Error in Sravni request:', error)
  }
}

const sendLeadMagnitRequest = async (click_id: string, email: string) => {
  try {
    // Генерирует число от 10 до 100
    const randomNumber = Math.floor(Math.random() * (100 - 10 + 1)) + 10

    const keadMagnitRes = await axios.get(
      `https://click.goleadcpa.ru/track/conv?token=04c36eac&click_id=${click_id}&goal_alias=lead&adv_order_id=${randomNumber}&adv_track_id=${randomNumber}&conv_status=pending&email=${email}`
    )
    console.log('LeadMagnitRequest request successful:', keadMagnitRes.data)
  } catch (error) {
    console.error('Error in LeadMagnitRequest request:', error)
  }
}

const hitContactRoute = async values => {
  try {
    const res = await axios.post(`${routesFront.root}/api/contact`, {
      ...values,
      isHighEducation: window.location.href.includes('highereducation')
    })
    let output

    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)

    if (
      output === 200 &&
      values.click_id &&
      values.utms.utm_campaign == 'sravniru'
    ) {
      await sendSravniRequest(values.click_id)
    }

    if (
      output === 200 &&
      values.utms.utm_source == 'leadmagnet' &&
      values.utms.utm_term
    ) {
      await sendLeadMagnitRequest(values.utms.utm_term, values.email)
    }

    return output
  } catch (err) {
    console.error('Error in contact request:', err)
    return err
  }
}

export default hitContactRoute
