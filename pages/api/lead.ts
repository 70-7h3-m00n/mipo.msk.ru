import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import axios from 'axios'
import SMTP from '../../src/config/SMTP'
import { getCookie } from 'cookies-next'
import console from 'console'
import parseGeneralSlug from '../../src/helpers/parseGeneralSlug'
import buildLeadData from '../../src/helpers/buildLeadData'
import createLeadEmailBody from '../../src/helpers/createLeadEmailBody'

type TypeNextApiResponseLeadData = {
    readonly err?: unknown
    readonly msg: string
}

const lead = async (req: NextApiRequest, res: NextApiResponse<TypeNextApiResponseLeadData | Error>) => {
    process.env.TZ = 'Europe/Moscow'

    const { name, email, phone } = req.body

    const roistatVisit = getCookie('roistat_visit', { req, res })

    axios.request({
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

    const protocol = req.headers['x-forwarded-proto']
    const rootPath = `${protocol ? `${protocol}://` : ''}${req.headers.host}`
    const leadPage = req.headers.referer?.toString()
    const ip =
        req.headers['x-forwarded-for']?.toString() ||
        req.socket.remoteAddress?.toString() ||
        req.connection.remoteAddress?.toString() ||
        null

    const { currentFacultySlug, currentProgramSlug } = parseGeneralSlug(
        leadPage?.replace(`http://localhost:3000//`, ''),
    )

    const location = null

    const data = await buildLeadData({
        ...req.body,
        rootPath,
        leadPage,
        currentFacultySlug,
        currentProgramSlug,
        ip,
        location,
    })
    const subject = `Новая заявка с ${data.rootPath}!`
    const html = createLeadEmailBody({ data, subject })

    const transporter = nodemailer.createTransport({
        // @ts-expect-error remove this line and fix the error
        host: SMTP.HOST,
        port: SMTP.PORT,
        secure: false, // true for 465, false for other ports
        logger: true,
        debug: true,
        tls: {
            rejectUnAuthorized: true,
        },
        auth: {
            user: SMTP.LOGIN,
            pass: SMTP.PASS,
        },
    })

    try {
        const emailRes = await transporter.sendMail({
            from: SMTP.FROM,
            to: SMTP.TO,
            subject, // Subject line
            text: `
      ${data.name}, \n
      ${data.phone}, \n
      ${data.email}
      `, // plain text body
            html,
        })

        console.log('Message sent: %s', emailRes.messageId)
        // res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
        res.status(200).json({ msg: 'Email is sent' })
    } catch (err) {
        res.status(500).json({ err, msg: 'Unexpected server error' })
        console.error(err)
    }
}

export default lead
