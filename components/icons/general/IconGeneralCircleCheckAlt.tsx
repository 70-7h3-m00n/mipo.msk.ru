import stls from '@/styles/components/icons/general/IconGeneralCircleCheckAlt.module.sass'
import { TGeneralColorHex, TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralCircleCheckAltProps = TPropClassNames & {
  color1?: TGeneralColorHex
  color2?: TGeneralColorHex
}

const IconGeneralCircleCheckAlt = ({
  classNames,
  color1,
  color2
}: TIconGeneralCircleCheckAltProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='20' height='20' rx='10' fill={color1 || colors['nu-2']} />
        <path
          d='M13.3158 8L9.10526 12.2106L7 10.1053'
          stroke={color2 || colors.nu}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralCircleCheckAlt
