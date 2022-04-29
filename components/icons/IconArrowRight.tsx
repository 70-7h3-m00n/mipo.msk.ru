import stls from '@/styles/components/icons/IconArrowRight.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TIconArrowRight = TPropClassNames

const IconArrowRight: FC<TIconArrowRight> = ({ classNames }) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Стрелка вправо</title>
        <path
          d='M1 1L8.5 8.5L1 16'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default IconArrowRight
