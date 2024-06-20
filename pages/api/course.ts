import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import buildLeadData from '@/helpers/buildLeadData'
import createLeadEmailBody from '@/helpers/createLeadEmailBody'

type TypeNextApiResponseLeadData = {
    readonly err?: unknown
    readonly msg: string
}

const lead = async (req: NextApiRequest, res: NextApiResponse<TypeNextApiResponseLeadData | Error>) => {
    const protocol = req.headers['x-forwarded-proto']

    const rootPath = `${protocol ? `${protocol}://` : ''}${req.headers.host}`
    const leadPage = req.headers.referer?.toString()
    const ip =
        req.headers['x-forwarded-for']?.toString() ||
        req.socket.remoteAddress?.toString() ||
        req.connection.remoteAddress?.toString() ||
        null


    const location = null

    const data = await buildLeadData({
        ...req.body,
        rootPath,
        leadPage,
        ip,
        location,
    })
    const subject = `Новая запись на новый курс ${data.rootPath}!`
    const html = createLeadEmailBody({ data, subject })


    const transporter = nodemailer.createTransport({
        // @ts-expect-error remove this line and fix the error
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

    try {
        const emailRes = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: `${dev ? process.env.SMTP_TO_DEV : process.env.SMTP_TO_PROD}`,
            subject, // Subject line
            text: `${data.name}, \n${data.phone}`, // plain text body
            html
        })

        console.log('Message sent: %s', emailRes.messageId)
        res.status(200).json({ msg: 'Email is sent' })
    } catch (err) {
        res.status(500).json({ err, msg: 'Unexpected server error' })
        console.error(err)
    }
}

export default lead
