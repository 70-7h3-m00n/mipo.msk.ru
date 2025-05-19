import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'

type TIconCirccleCheck = TPropClassNames

const IconCircleChecType3: FC<TIconCirccleCheck> = ({ classNames }) => {
  const { program } = useContext(ProgramContext)

  return (
    <div className={cn(stls.container) || undefined}>
      <svg
        width='37'
        height='37'
        viewBox='0 0 37 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='0.5' y='0.5' width='36' height='36' rx='18' fill='#EEF3FF' />
        <rect
          x='0.5'
          y='0.5'
          width='36'
          height='36'
          rx='18'
          stroke='url(#paint0_linear_10145_16023)'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 19L17.5 21.5L23 16'
          stroke='#1A1A1A'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_10145_16023'
            x1='1.74118'
            y1='37'
            x2='19.8321'
            y2='14.2604'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2D68F1' />
            <stop offset='1' stopColor='#709AFE' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default IconCircleChecType3
