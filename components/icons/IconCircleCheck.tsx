import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TIconCirccleCheck = TPropClassNames & {
  calpha?: boolean
  inverse?: boolean
  atMba?: boolean
  color1?: TGeneralColorHex
  color2?: TGeneralColorHex
}

const IconCircleCheck: FC<TIconCirccleCheck> = ({
  classNames,
  calpha = false,
  inverse = false,
  atMba = false,
  color1,
  color2
}) => {
  return (
    <div
      className={
        cn(
          {
            [stls.container]: true,
            [stls.calpha]: calpha,
            [stls.inverse]: inverse,
            [stls.atMba]: atMba
          },
          getClassNames({ classNames })
        ) || undefined
      }>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M8.10815 10.2701L9.45951 11.6214L12.4325 8.64844'
          stroke={color1 || colors.alpha}
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
          stroke={color2 || colors['phi-2']}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCircleCheck
