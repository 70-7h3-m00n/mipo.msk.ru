import stls from '@/styles/components/icons/general/IconGeneralCircle.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralCircleProps = TPropClassNames & TPropColor

const IconGeneralCircle = ({ classNames, color }: TIconGeneralCircleProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='17' cy='17' r='17' fill={color || colors['xi-2']} />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralCircle
