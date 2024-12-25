import stls from '@/styles/components/icons/IconMenu.module.sass'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface Props {
  calpha?: boolean
  isForPhychology?: boolean
}

const IconMenu = ({ calpha = false, isForPhychology = false }: Props) => {
  const router = useRouter()
  const redirectHeader = router.asPath.includes('new-courses')

  return (
    <div
      className={classNames({ [stls.container]: true, [stls.calpha]: calpha })}>
      <svg viewBox='0 0 20 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line
          y1='1'
          x2='20'
          y2='1'
          stroke={redirectHeader || isForPhychology ? 'black' : 'white'}
          strokeWidth='2'
          strokeLinejoin='round'
        />
        <line
          y1='8'
          x2='10'
          y2='8'
          stroke={redirectHeader || isForPhychology ? 'black' : 'white'}
          strokeWidth='2'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconMenu
