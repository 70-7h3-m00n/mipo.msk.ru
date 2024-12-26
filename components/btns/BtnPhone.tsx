import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

interface Props {
  withNumber?: boolean
  isSecondNumber?: boolean
  colorText?: string
}

const BtnPhone = ({
  withNumber = false,
  isSecondNumber = false,
  colorText
}: Props) => {
  const [validComponent, setValidComponent] = useState(null)

  useEffect(() => {
    if (getCookie('utm_source') !== undefined) {
      setValidComponent(true)
    } else {
      setValidComponent(false)
    }
  }, [])

  if (validComponent || validComponent === null) return <></>

  const numberString = isSecondNumber ? number.newVal : number.val
  const hrefString = isSecondNumber ? number.newHref : number.href

  const rootStyle = { color: colorText }

  return (
    <a
      href={hrefString}
      style={rootStyle}
      suppressHydrationWarning
      className={classNames(stls.container, withNumber && stls.withNumber)}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} /> {withNumber && numberString}
    </a>
  )
}

export default BtnPhone
