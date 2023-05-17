import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const BtnPhone = ({ withNumber = false }) => {
  const router = useRouter()

  if (router.asPath.includes('edpartners')) return <></>
  return (
    <a
      href={number.href}
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
