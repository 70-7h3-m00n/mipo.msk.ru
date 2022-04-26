import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import cn from 'classnames'

const IconCircleCheck = ({
  calpha = false,
  inverse = false,
  atMba = false
}) => {
  return (
    <div
      className={cn({
        [stls.container]: true,
        [stls.calpha]: calpha,
        [stls.inverse]: inverse,
        [stls.atMba]: atMba
      })}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M8.10815 10.2701L9.45951 11.6214L12.4325 8.64844'
          stroke='#002C9F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='0.5'
          y='0.5'
          width='19'
          height='19'
          rx='9.5'
          stroke='#FEF2E8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCircleCheck
