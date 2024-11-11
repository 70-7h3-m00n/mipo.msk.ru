import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

const BtnPhone = ({ withNumber = false, isSecondNumber = false }) => {
  const [validComponent, setValidComponent] = useState(null)

  useEffect(() => {
    if(getCookie('utm_source') !== undefined) {
      setValidComponent(true)
    } else {
      setValidComponent(false)
    }
  }, [])

  if (validComponent || validComponent === null) return <></>

  const numberString = isSecondNumber ? number.newVal : number.val;
  const hrefString = isSecondNumber ? number.newHref : number.href;

  return (
    <a
      href={hrefString}
      suppressHydrationWarning
      className={classNames({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} /> {withNumber && numberString}
    </a>
  )
}

export default BtnPhone
