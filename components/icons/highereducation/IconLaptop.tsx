import stls from '@/styles/components/icons/general/IconGeneralMap.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralMapProps = TPropClassNames & TPropColor

const IconLaptop = ({ classNames, color }: TIconGeneralMapProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_9291_12143)'>
          <path
            d='M21.2861 17.9646L22.9355 20.1794H1.06445L2.71387 17.9646H21.2861Z'
            fill='#2663F0'
            stroke='#2663F0'
            strokeWidth='2'
          />
          <path
            d='M4.08447 3.82019H9.43604C8.86615 4.05324 8.45073 4.5858 8.38623 5.22253L8.37744 5.39636L8.38623 5.57019C8.4734 6.42863 9.19819 7.09838 10.0796 7.09851H13.9204C14.8606 7.0985 15.6225 6.33654 15.6226 5.39636C15.6226 4.68424 15.1856 4.0743 14.5649 3.82019H19.9155C20.3977 3.82027 20.7884 4.2111 20.7886 4.69324V14.5594H3.21143V4.69324L3.21631 4.60437C3.25805 4.1933 3.58454 3.86682 3.99561 3.82507L4.08447 3.82019Z'
            stroke='#2663F0'
            strokeWidth='2'
          />
        </g>
        <defs>
          <clipPath id='clip0_9291_12143'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconLaptop
