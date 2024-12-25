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
    <IconContainer>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='39'
        height='39'
        viewBox='0 0 39 39'
        fill='none'>
        <circle cx='19.5' cy='19.5' r='19.5' fill='#6F01C6' />
        <path
          d='M13 20L18 22.8868V17.1132L13 20ZM26 19.5H17.5V20.5H26V19.5Z'
          fill='white'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralArrowRightAlt
