import stls from '@/styles/components/cards/CardContact.module.sass'
import classNames from 'classnames'
import { IconLocation } from '../icons'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

type CardContactType = {
  city: string
  street: string
  numbers: { href: string; val: string }[]
  email: { href: string; val: string }
}

const CardContact = ({ city, street, numbers, email }: CardContactType) => {
  const [validComponent, setValidComponent] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if(getCookie('utm_source') !== undefined) {
      setValidComponent(true)
    } else {
      setValidComponent(false)
    }
  }, [])

  return (
    <div className={stls.container}>
      <div className={stls.row}>

        <div className={stls.icon}>
          <IconLocation cbeta responsive />
        </div>

        <p className={stls.city}>{city}</p>
      </div>

      <div className={stls.row}>
        <p className={stls.street}>{street}</p>
      </div>

      {
        validComponent || validComponent === null? <></>:
          <div className={classNames({ [stls.row]: true, [stls.numbers]: true })}>
            {numbers.map((number, idx) => (
              <p key={number.val} className={stls.number}>
                <a href={number.href} className={stls.link}>
                  {number.val}
                </a>
                {idx + 1 < numbers.length && ','}
              </p>
            ))}
          </div>
      }

      <div className={stls.row}>
        <p className={stls.email}>
          <a href={email.href} className={stls.link}>
            {email.val}
          </a>
        </p>
      </div>
    </div>
  )
}

export default CardContact
