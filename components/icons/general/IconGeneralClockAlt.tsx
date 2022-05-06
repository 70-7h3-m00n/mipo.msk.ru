import stls from '@/styles/components/icons/general/IconGeneralClockAlt.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralClockAltProps = TPropClassNames & TPropColor

const IconGeneralClockAlt = ({
  classNames,
  color
}: TIconGeneralClockAltProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 6V12L16 14'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralClockAlt
