import stls from '@/styles/components/icons/general/IconGeneralArrowRightAlt.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralArrowRightAltProps = TPropClassNames & TPropColor

const IconGeneralArrowRightAlt = ({
  classNames,
  color
}: TIconGeneralArrowRightAltProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 8H15'
          stroke={color || colors.nu}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 1L15 8L8 15'
          stroke={color || colors.nu}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralArrowRightAlt
