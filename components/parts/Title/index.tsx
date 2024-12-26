import React from 'react'
import cn from 'classnames'
import strl from './index.module.sass'

type TitleProps = {
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  children?: React.ReactNode
  color?: 'black' | 'grey' | 'white' | 'purple'
  fontSize?: number
}

const Title = ({
  as: Component = 'div',
  className,
  children,
  color = 'black',
  fontSize
}: TitleProps) => {
  const rootStyles = { fontSize: fontSize && `${fontSize}px` }
  return (
    <Component
      className={cn(strl.component, strl[color], className)}
      style={rootStyles}>
      {children}
    </Component>
  )
}

export default Title
