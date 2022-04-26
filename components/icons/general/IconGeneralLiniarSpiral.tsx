import stls from '@/styles/components/icons/general/IconGeneralLiniarSpiral.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralLiniarSpiralProps = TPropClassNames & TPropColor

const IconGeneralLiniarSpiral = ({
  classNames,
  color
}: TIconGeneralLiniarSpiralProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 272 532' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M87.0029 1C60.236 23.0431 -5.12569 74 1.35095 129.137C8.50021 190 135.502 203.5 142.002 240C150.982 290.428 37.7514 306.86 46.9523 364.151C56.0021 420.5 258.001 394.5 270.441 452.813C277.778 487.206 225.068 521.165 193.675 531'
          stroke={color || colors.nu}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralLiniarSpiral
