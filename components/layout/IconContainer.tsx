import stls from '@/styles/components/layout/IconContainer.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TIconContainerProps = TPropClassNames & TPropChildren

const IconContainer: FC<TIconContainerProps> = ({ classNames, children }) => {
  return (
    <span
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </span>
  )
}

export default IconContainer
