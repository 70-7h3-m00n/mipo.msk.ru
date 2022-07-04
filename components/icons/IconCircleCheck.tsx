import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'

type TIconCirccleCheck = TPropClassNames & {
  calpha?: boolean
  inverse?: boolean
  altStyles?: boolean
  color1?: TGeneralColorHex
  color2?: TGeneralColorHex
}

const IconCircleCheck: FC<TIconCirccleCheck> = ({
  classNames,
  calpha = false,
  inverse = false,
  altStyles = false,
  color1,
  color2
}) => {
  const { program } = useContext(ProgramContext)

  return (
    <div
      className={
        cn(
          {
            [stls.container]: true,
            [stls.calpha]: calpha,
            [stls.inverse]: inverse,
            [stls.altStyles]: altStyles
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
