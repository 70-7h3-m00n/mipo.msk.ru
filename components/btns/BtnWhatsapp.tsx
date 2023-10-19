import stls from '@/styles/components/btns/BtnWhatsapp.module.sass'
import { IconWhatsapp } from '@/components/icons'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const BtnWhatsapp = ({ dark = false }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('https://api.whatsapp.com/send?phone=+7 916 637-69-41&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%20%D0%9F%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%7C%20%D0%9C%D0%98%D0%9F%D0%9E')}
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}
      aria-label='Whatsapp'>
      <IconWhatsapp />
    </button>
  )
}

export default BtnWhatsapp
