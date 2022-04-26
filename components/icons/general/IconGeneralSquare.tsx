import stls from '@/styles/components/icons/general/IconGeneralSquare.module.sass'
import { TPropClassNames, TPropColor, TGeneralColorHex } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralSquareProps = TPropClassNames &
  TPropColor & {
    color2?: TGeneralColorHex
  }

const IconGeneralSquare = ({
  classNames,
  color,
  color2
}: TIconGeneralSquareProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg
        width='238'
        height='202'
        viewBox='0 0 238 202'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_b_901_9270)'>
          <rect
            x='0.41748'
            y='0.371094'
            width='236.789'
            height='201.248'
            rx='25'
            fill='white'
            fillOpacity='0.14'
          />
          <rect
            x='0.91748'
            y='0.871094'
            width='235.789'
            height='200.248'
            rx='24.5'
            stroke='url(#paint0_linear_901_9270)'
          />
        </g>
        <defs>
          <filter
            id='filter0_b_901_9270'
            x='-5.58252'
            y='-5.62891'
            width='248.789'
            height='213.246'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImage' stdDeviation='3' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_901_9270'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_901_9270'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_901_9270'
            x1='11.5605'
            y1='201.619'
            x2='105.276'
            y2='63.0185'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors['nu-2']} />
            <stop offset='1' stopColor={color || colors['xi-2']} />
          </linearGradient>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconGeneralSquare
