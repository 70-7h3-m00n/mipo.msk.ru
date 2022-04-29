import stls from '@/styles/components/icons/general/IconGeneralCircleArrorRight.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralCircleArrorRightProps = TPropClassNames & {
  color1?: TGeneralColorHex
  color2?: TGeneralColorHex
  color3?: TGeneralColorHex
}

const IconGeneralCircleArrorRight = ({
  classNames,
  color1,
  color2,
  color3
}: TIconGeneralCircleArrorRightProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='35'
          cy='35'
          r='34.5'
          stroke='url(#paint0_linear_901_9037)'
        />
        <path
          d='M50.3536 35.3536C50.5488 35.1583 50.5488 34.8417 50.3536 34.6464L47.1716 31.4645C46.9763 31.2692 46.6597 31.2692 46.4645 31.4645C46.2692 31.6597 46.2692 31.9763 46.4645 32.1716L49.2929 35L46.4645 37.8284C46.2692 38.0237 46.2692 38.3403 46.4645 38.5355C46.6597 38.7308 46.9763 38.7308 47.1716 38.5355L50.3536 35.3536ZM20 35.5H50V34.5H20V35.5Z'
          fill={color1 || colors.chi}
        />
        <path
          d='M50.3536 35.3536C50.5488 35.1583 50.5488 34.8417 50.3536 34.6464L47.1716 31.4645C46.9763 31.2692 46.6597 31.2692 46.4645 31.4645C46.2692 31.6597 46.2692 31.9763 46.4645 32.1716L49.2929 35L46.4645 37.8284C46.2692 38.0237 46.2692 38.3403 46.4645 38.5355C46.6597 38.7308 46.9763 38.7308 47.1716 38.5355L50.3536 35.3536ZM20 35.5H50V34.5H20V35.5Z'
          fill='url(#paint1_linear_901_9037)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_901_9037'
            x1='3.29412'
            y1='70'
            x2='37.5201'
            y2='26.9791'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color2 || colors['nu-2']} />
            <stop offset='1' stopColor={color3 || colors['xi-2']} />
          </linearGradient>
          <linearGradient
            id='paint1_linear_901_9037'
            x1='0.499993'
            y1='23'
            x2='3.18663'
            y2='19.1505'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color2 || colors['nu-2']} />
            <stop offset='1' stopColor={color3 || colors['xi-2']} />
          </linearGradient>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconGeneralCircleArrorRight
