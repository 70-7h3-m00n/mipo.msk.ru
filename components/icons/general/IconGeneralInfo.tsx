import stls from '@/styles/components/icons/general/IconGeneralInfo.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralInfoProps = TPropClassNames & TPropColor

const IconGeneralInfo = ({ classNames, color }: TIconGeneralInfoProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.9998 23.8327C18.9829 23.8327 23.8332 18.9824 23.8332 12.9993C23.8332 7.01626 18.9829 2.16602 12.9998 2.16602C7.01675 2.16602 2.1665 7.01626 2.1665 12.9993C2.1665 18.9824 7.01675 23.8327 12.9998 23.8327Z'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 17.3333V13'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 8.66602H13.0117'
          stroke={color || colors.beta}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralInfo
