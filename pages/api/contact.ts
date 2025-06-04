import nodemailer from 'nodemailer'
import { dev, UTM_KEYS_OBJ } from '@/config/index'
import moment from 'moment'
import { WebServiceClient } from '@maxmind/geoip2-node'
import axios from 'axios'
import { getCookie, getCookies } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  process.env.TZ = 'Europe/Moscow'
  let {
    id,
    name,
    phone,
    email,
    vk,
    contactWay,
    contactMethod,
    question,
    programTitle,
    leadPage,
    utms,
    clickid,
    referer,
    ymUid,
    post_promocode,
    formName,
    tarifPhycho,
    name_programm,
    category_programm,
    price_programm,
    full_link,
    isHighEducation,
    webinarData
  } = req.body

  if (name?.includes('@')) {
    email = name
    name = ''
  }

  const roistatVisit = getCookie('roistat_visit', { req, res })

  axios
    .request({
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cloud.roistat.com/api/proxy/1.0/leads/add?roistat=${roistatVisit}&key=OTU1ZDc0NjZlN2M3NDkyYzg4ZDdhMWU5MDQ5Y2ZhYzM6MjMyMTk1&title=Новая заявка с сайта&name=${name}&email=${email}&phone=${phone}`,
      headers: {}
    })
    .then(response => {
      console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.log(error)
    })

  // geoip2 init
  const geoip2 = new WebServiceClient('550199', process.env.GEO2_APIKEY, {
    host: 'geolite.info'
  })

  // moment init
  const now = moment()

  // get protocol
  const protocol = req.headers['x-forwarded-proto']

  // get referer
  // const referer = req.headers['referer']

  // get root path
  const root = protocol + '://' + req.headers.host

  // get ip
  const ip =
    req.headers['x-forwarded-for'] ||
    // req.socket.remoteAddress ||
    req.connection.remoteAddress ||
    null

  const getUserLocation = async () => {
    try {
      const res = await geoip2.city(ip.toString())
      const output = {
        continent: {
          code: res.continent.code,
          names: {
            ru: res.continent.names.ru,
            en: res.continent.names.en
          }
        },
        country: {
          code: res.country.isoCode,
          names: {
            ru: res.country.names.ru,
            en: res.country.names.en
          }
        },
        city: {
          names: {
            en: res.city.names.en,
            ru: res.city.names.ru
          }
        },
        coordinates: {
          accuracyRadius: res.location.accuracyRadius,
          latitude: res.location.latitude,
          longitude: res.location.longitude
        },
        timeZone: res.location.timeZone,
        postalCode: res.postal.code
      }
      return output
    } catch (err) {
      console.log(err)
      return null
    }
  }

  const locationData = await getUserLocation()

  const dataToMIPOAmo = {
    id: id || null,
    date: now.format('DD-MM-YYYY') || null,
    time: now.format('HH:mm:ss') || null,
    utc: now.format('Z') || null,
    post_name: name || null,
    post_phone: phone || null,
    post_email: email || null,
    vk: vk || null,
    post_promocode: post_promocode || null,
    contactWay: contactWay || null,
    contactMethod: contactMethod || null,
    question: question || null,
    root: root || null,
    leadpage: root + leadPage || null,
    ip: ip || null,
    ymUid: ymUid || null,
    cityEn: (locationData && locationData.city.names.en) || null,
    cityRu: (locationData && locationData.city.names.ru) || null,
    countryCode: (locationData && locationData.country.code) || null,
    countryEn: (locationData && locationData.country.names.en) || null,
    countryRu: (locationData && locationData.country.names.ru) || null,
    continentCode: (locationData && locationData.continent.code) || null,
    continentEn: (locationData && locationData.continent.names.en) || null,
    continentRu: (locationData && locationData.continent.names.ru) || null,
    accuracyRadius:
      (locationData && locationData.coordinates.accuracyRadius) || null,
    latitude: (locationData && locationData.coordinates.latitude) || null,
    longitude: (locationData && locationData.coordinates.longitude) || null,
    timeZone: (locationData && locationData.timeZone) || null,
    postalCode: (locationData && locationData.postalCode) || null,
    programTitle: programTitle || null,
    utmSource: (utms && utms.utm_source) || referer || null,
    utmMedium: (utms && utms.utm_medium) || null,
    utmCampaign: (utms && utms.utm_campaign) || null,
    utmContent: (utms && utms.utm_content) || null,
    utmTerm: (utms && utms.utm_term) || null,
    clUid: utms?.cl_uid || null,
    clickid: clickid || null,
    formName: formName || null,
    type_tariff: tarifPhycho || null,
    name_programm: name_programm || null,
    category_programm:
      category_programm || (webinarData && webinarData.type) || null,
    price_programm: price_programm || null,
    full_link: full_link || null,
    webinarName:
      (webinarData &&
        webinarData.name &&
        `Вебинар ${webinarData.name} на ${webinarData.date}`) ||
      null
  }

  const dataToHigherEducationAMO = {
    id: id || null,
    date: now.format('DD-MM-YYYY') || null,
    time: now.format('HH:mm:ss') || null,
    utc: now.format('Z') || null,
    name: name || null,
    phone: phone || null,
    email: email || null,
    vk: vk || null,
    post_promocode: post_promocode || null,
    contactWay: contactWay || null,
    contactMethod: contactMethod || null,
    question: question || null,
    root: root || null,
    leadpage: full_link || null,
    ip: ip || null,
    ymUid: ymUid || null,
    cityEn: (locationData && locationData.city.names.en) || null,
    cityRu: (locationData && locationData.city.names.ru) || null,
    countryCode: (locationData && locationData.country.code) || null,
    countryEn: (locationData && locationData.country.names.en) || null,
    countryRu: (locationData && locationData.country.names.ru) || null,
    continentCode: (locationData && locationData.continent.code) || null,
    continentEn: (locationData && locationData.continent.names.en) || null,
    continentRu: (locationData && locationData.continent.names.ru) || null,
    accuracyRadius:
      (locationData && locationData.coordinates.accuracyRadius) || null,
    latitude: (locationData && locationData.coordinates.latitude) || null,
    longitude: (locationData && locationData.coordinates.longitude) || null,
    timeZone: (locationData && locationData.timeZone) || null,
    postalCode: (locationData && locationData.postalCode) || null,
    programtitle: programTitle || null,
    utmsource: (utms && utms.utm_source) || referer || null,
    utmmedium: (utms && utms.utm_medium) || null,
    utmcampaign: (utms && utms.utm_campaign) || null,
    utmcontent: (utms && utms.utm_content) || null,
    utmterm: (utms && utms.utm_term) || null,
    cluid: utms?.cl_uid || null,
    clickid: clickid || null,
    formName: formName || null,
    type_tariff: tarifPhycho || null,
    name_programm: name_programm || null,
    category_programm: category_programm || null,
    price_programm: price_programm || null,
    full_link: full_link || null
  }

  // F5 BEGIN
  // https://tglk.ru/in/MX4bxnhq9LCnZWR5

  const urlToAmo = !!isHighEducation
    ? 'https://hooks.tglk.ru/in/BwPJOY6VJQ3JW4CDarCYeZ79ZGNKaM'
    : 'https://tglk.ru/in/MX4bxnhq9LCnZWR5'

  const data = !!isHighEducation ? dataToHigherEducationAMO : dataToMIPOAmo

  try {
    await axios.request({
      method: 'POST',
      maxBodyLength: Infinity,
      url: urlToAmo,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })

    console.log('f5 sucssess')
  } catch (e) {
    console.log('error in f5 request')
    console.error(e)
  }

  //  F5 END

  const subject = 'Новая заявка с mipo.msk.ru'

  const createEmailBody = () => {
    const createTr = (item, idx) => {
      const output = /* html */ `
        <tr id='tr-item-${idx}' class="${idx % 2 === 0 && 'bgOnEven'} ${
        item.tdKey === 'Телефон' && 'active-row'
      } ${!(idx + 1) && 'bgBorderHighlight'}">
          <td class="counterCell">${idx + 1}</td>
          <td>${item.tdKey}</td>
          <td>${item.tdVal}</td>
        </tr>
      `
      return output
    }

    const tbodyTrs = [
      {
        tdKey: 'ID',
        tdVal: dataToMIPOAmo.id
      },
      {
        tdKey: 'Дата',
        tdVal: dataToMIPOAmo.date
      },
      {
        tdKey: 'Время',
        tdVal: dataToMIPOAmo.time
      },
      {
        tdKey: 'UTC',
        tdVal: dataToMIPOAmo.utc
      },
      {
        tdKey: 'Имя',
        tdVal: dataToMIPOAmo.post_name
      },
      {
        tdKey: 'Телефон',
        tdVal: dataToMIPOAmo.post_phone
      },
      {
        tdKey: 'Почта',
        tdVal: dataToMIPOAmo.post_email
      },
      {
        tdKey: 'ВКонтакте',
        tdVal: dataToMIPOAmo.vk
      },
      {
        tdKey: 'Промокод',
        tdVal: dataToMIPOAmo.post_promocode
      },
      {
        tdKey: 'Способ связи',
        tdVal: dataToMIPOAmo.contactWay
      },
      {
        tdKey: 'Название программы',
        tdVal: dataToMIPOAmo.name_programm
      },
      {
        tdKey: 'Тариф для психологии',
        tdVal: dataToMIPOAmo.type_tariff
      },
      {
        tdKey: 'Категория программы',
        tdVal: dataToMIPOAmo.category_programm
      },
      {
        tdKey: 'Полная стоимость программы',
        tdVal: dataToMIPOAmo.price_programm
      },
      {
        tdKey: 'Ссылка на страницу',
        tdVal: dataToMIPOAmo.full_link
      },
      {
        tdKey: 'Как связаться',
        tdVal: dataToMIPOAmo.contactMethod
      },
      {
        tdKey: 'Вопрос',
        tdVal: dataToMIPOAmo.question
      },
      {
        tdKey: 'Лид сайт',
        tdVal: dataToMIPOAmo.root
      },
      {
        tdKey: 'Лид страница',
        tdVal: dataToMIPOAmo.full_link
      },
      {
        tdKey: 'IP',
        tdVal: dataToMIPOAmo.ip
      },
      {
        tdKey: 'Город (en)',
        tdVal: dataToMIPOAmo.cityEn
      },
      {
        tdKey: 'Город (ru)',
        tdVal: dataToMIPOAmo.cityRu
      },
      {
        tdKey: 'Код страны',
        tdVal: dataToMIPOAmo.countryCode
      },
      {
        tdKey: 'Страна (en)',
        tdVal: dataToMIPOAmo.countryEn
      },
      {
        tdKey: 'Страна (ru)',
        tdVal: dataToMIPOAmo.countryRu
      },
      {
        tdKey: 'Континент код',
        tdVal: dataToMIPOAmo.continentCode
      },
      {
        tdKey: 'Континент (en)',
        tdVal: dataToMIPOAmo.continentEn
      },
      {
        tdKey: 'Континент (ru)',
        tdVal: dataToMIPOAmo.continentRu
      },
      {
        tdKey: 'Погрешность (м)',
        tdVal: dataToMIPOAmo.accuracyRadius
      },
      {
        tdKey: 'Широта',
        tdVal: dataToMIPOAmo.latitude
      },
      {
        tdKey: 'Долгота',
        tdVal: dataToMIPOAmo.longitude
      },
      {
        tdKey: 'Часовой пояс',
        tdVal: dataToMIPOAmo.timeZone
      },
      {
        tdKey: 'Зип код',
        tdVal: dataToMIPOAmo.postalCode
      },
      {
        tdKey: 'Направление',
        tdVal: dataToMIPOAmo.programTitle
      },
      {
        tdKey: 'Университет',
        tdVal: null
      },
      {
        tdKey: 'Google Client ID',
        tdVal: null
      },
      {
        tdKey: 'Yandex Metrics ID',
        tdVal: ymUid
      },
      {
        tdKey: 'Устройство пользователя',
        tdVal: null
      },
      {
        tdKey: 'Источник рекламы',
        tdVal: dataToMIPOAmo.utmSource
      },
      {
        tdKey: 'Тип трафика',
        tdVal: dataToMIPOAmo.utmMedium
      },
      {
        tdKey: 'Название РК',
        tdVal: dataToMIPOAmo.utmCampaign
      },
      {
        tdKey: 'Объявление',
        tdVal: dataToMIPOAmo.utmContent
      },
      {
        tdKey: 'Ключевое слово',
        tdVal: dataToMIPOAmo.utmTerm
      },
      {
        tdKey: 'Affise clUid',
        tdVal: dataToMIPOAmo.clUid
      },
      {
        tdKey: 'Affise clickid',
        tdVal: dataToMIPOAmo.clickid
      },
      {
        tdKey: 'Дубль',
        tdVal: null
      },
      {
        tdKey: 'Информация для менеджера по продажам',
        tdVal: dataToMIPOAmo.formName
      }
    ]

    const output = /* html */ `
      <!DOCTYPE html>
      <html lang="ru">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
          <style>
            .styled-table {
              border-collapse: collapse;
              margin: 25px 0;
              font-size: 0.9em;
              font-family: sans-serif;
              min-width: 400px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
              counter-reset: tableCount;
            }
            .counterCell::before {
              content: counter(tableCount);
              counter-increment: tableCount;
            }
            .styled-table thead tr {
              background-color: #002C9F;
              color: #ffffff;
              text-align: left;
            }
            .styled-table th,
            .styled-table td {
              padding: 12px 15px;
            }
            .styled-table tbody tr {
              border-bottom: thin solid #dddddd;
            }
      
            .styled-table tbody tr:nth-of-type(even),
            .bgOnEven {
              background-color: #f3f3f3;
            }
      
            .styled-table tbody tr:last-of-type,
            .bgBorderHighlight {
              border-bottom: 2px solid #002C9F;
            }
            .styled-table tbody tr.active-row {
              font-weight: bold;
              color: #002C9F;
            }
          </style>
          <title>${subject}</title>
        </head>
        <body>
          <h1>${subject}</h1>
          <p>🎉🥳🎉 Ура! Новая заявка с ${root}! 🎉🥳🎉</p>
          <table class="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ключ</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              ${tbodyTrs.map(createTr).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `
    return output
  }

  const html = createEmailBody()

  // const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for other ports
    logger: true,
    debug: true,
    tls: {
      rejectUnAuthorized: true
    },
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASS
    }
  })
  //
  try {
    const emailRes = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: `${dev ? process.env.SMTP_TO_DEV : process.env.SMTP_TO_PROD}`,
      subject, // Subject line
      text: `
      ${name}, \n
      ${phone},
      ${email}
      `, // plain text body
      html
    })

    console.log('Message sent: %s', emailRes.messageId)
    console.log(data.id)
    res.status(200).json({ status: 200, msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
    console.error(err)
  }

  const sendUnisenderMain = async (email: string) => {
    try {
      const key = '6n5zjpn19n8af3kr4sw7pgdmpryooziha6s99f6y'
      const unisendlerRes =
        await axios.get(`https://api.unisender.com/ru/api/subscribe?format=json&api_key=${key}&list_ids=7&fields[email]=${email}&tags=MIPO&double_optin=3&overwrite=0
`)
      console.log('Unisender request successful:', unisendlerRes.data)
    } catch (error) {
      console.error('Unisender in request:', error)
    }
  }

  sendUnisenderMain(email)
}

export default contact
