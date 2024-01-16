import stls from '@/styles/components/btns/BtnTelegram.module.sass'
import { IconTelegram } from '@/components/icons'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const BtnTelegram = ({ dark = false }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('https://t.me/mipomsk')}
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}
      aria-label='Telegram'>
      <IconTelegram />
    </button>
  )
}

export default BtnTelegram
