import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

export type TypeNextApiResponseLeadData = {
  readonly err?: unknown
  readonly msg: string
  readonly url?: string
  readonly status: number
  readonly transactionId?: number | string
}

const idempotenceKey = uuidv4()

const payment = async (req: NextApiRequest, res: NextApiResponse<TypeNextApiResponseLeadData | Error>) => {
  const { price, returnURL, name, phone, programTitle } = req.body

  const requestData = {
    amount: {
      value: `${price}.00`,
      currency: 'RUB'
    },
    capture: true,
    confirmation: {
      type: 'redirect',
      return_url: returnURL
    },
    receipt: {
      customer: {
        full_name: name,
        phone: phone
      },
      items: [
        {
          description: `Программа ${programTitle} для ${name}`,
          quantity: '1.00',
          amount: {
            value: `${price}.00`,
            currency: 'RUB'
          },
          vat_code: '2',
          payment_mode: 'full_prepayment',
          payment_subject: 'commodity'
        }
      ]
    }
  }

  try {
    const response = await axios.post(
      'https://api.yookassa.ru/v3/payments',
      requestData,
      {
        auth: {
          username: process.env.YOOKASSA_SHOP_ID,
          password: process.env.YOOKASSA_SECRET_KEY
        },
        headers: {
          'Idempotence-Key': idempotenceKey,
          'Content-Type': 'application/json'
        }
      }
    )

    res.status(200).json({
      status: 200,
      msg: 'URL returned successfully',
      url: response.data.confirmation.confirmation_url,
      transactionId: response.data.id
    })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
    console.error(err, '')
  }
}

export default payment