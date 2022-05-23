import stls from '@/styles/components/icons/general/IconGeneralTextDecorativeUnderline.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralTextDecorativeUnderlineProps = TPropClassNames & TPropColor

const IconGeneralTextDecorativeUnderline = ({
  classNames,
  color
}: TIconGeneralTextDecorativeUnderlineProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 159 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.00046 9.51377C51.5013 -13.9964 92.552 21.589 87.5019 7.00319C83 -5.99902 128.31 10.2336 158.503 4.50131'
          stroke={color || colors['nu-2']}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralTextDecorativeUnderline
