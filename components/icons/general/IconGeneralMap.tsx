import stls from '@/styles/components/icons/general/IconGeneralMap.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralMapProps = TPropClassNames & TPropColor

const IconGeneralMap = ({ classNames, color }: TIconGeneralMapProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 2V18'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 6V22'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralMap
