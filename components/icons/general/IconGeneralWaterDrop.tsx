import stls from '@/styles/components/icons/general/IconGeneralWaterDrop.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralWaterDropProps = TPropClassNames & TPropColor

const IconGeneralWaterDrop = ({
  classNames,
  color
}: TIconGeneralWaterDropProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 28.5C0 12.7599 12.7599 0 28.5 0H57V28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5Z'
          fill={color || colors['nu-2']}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralWaterDrop
