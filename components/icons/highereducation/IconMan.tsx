import stls from '@/styles/components/icons/general/IconGeneralMap.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralMapProps = TPropClassNames & TPropColor

const IconMan = ({ classNames, color }: TIconGeneralMapProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_9291_12155)'>
          <path
            d='M17.0439 14.3294C19.4057 15.6629 20.9987 18.1965 21 21.1019L20.9941 21.2161C20.9678 21.4782 20.8516 21.7122 20.6748 21.8909C20.47 22.095 20.1922 22.219 19.8848 22.2191H5.11523C4.49992 22.219 4.00003 21.7198 4 21.1019C4 19.09 4.76299 17.2577 6.01758 15.8773L6.27441 15.6077C6.77227 15.1098 7.33824 14.6797 7.95508 14.3314L9.37012 21.1468L11.3281 21.1448L12.499 15.4515L13.6699 21.1439L15.6289 21.1458L17.0439 14.3294ZM12.8506 13.3323L12.499 13.8187L12.1475 13.3323H12.8506Z'
            stroke='#2663F0'
            strokeWidth='2'
          />
          <path
            d='M9.84598 3.06596C11.3103 1.60161 13.6848 1.60154 15.1491 3.06596C16.6133 4.53039 16.6133 6.90504 15.1491 8.36947C13.6848 9.83389 11.3103 9.83381 9.84598 8.36947C8.38163 6.90501 8.38163 4.53042 9.84598 3.06596Z'
            stroke='#2663F0'
            strokeWidth='2'
          />
        </g>
        <defs>
          <clipPath id='clip0_9291_12155'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconMan
