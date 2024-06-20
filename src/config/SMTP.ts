import dev from './dev';

const SMTP = {
  TO: process.env.SMTP_TO_PROD,
  HOST: process.env.SMTP_HOST,
  PASS: process.env.SMTP_PASS,
  FROM: process.env.SMTP_FROM,
  LOGIN: process.env.SMTP_LOGIN,
  PORT: 587,
}

export default SMTP
