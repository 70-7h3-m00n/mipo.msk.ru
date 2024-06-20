import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

const BtnPhone = ({ withNumber = false }) => {
  const [validComponent, setValidComponent] = useState<boolean | null>(null)

  useEffect(() => {
    if(getCookie('utm_source') !== undefined) {
      setValidComponent(true)
    } else {
      setValidComponent(false)
    }
  })

  if (validComponent || validComponent === null) return <></>

  return (
    <a
      href={number.href}
      suppressHydrationWarning
      className={classNames({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} /> {withNumber && number.val}
    </a>
  )
}

export default BtnPhone
