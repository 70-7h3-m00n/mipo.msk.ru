import stls from '@/styles/components/icons/IconClose.module.sass'
import cn from 'classnames'

const IconClose = ({ withHeight }: { withHeight?: boolean }) => {
  return (
    <div className={cn(stls.container, withHeight && stls.withHeight)}>
      <svg viewBox='0 0 35 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <line
          x1='6'
          y1='25.3343'
          x2='29.3345'
          y2='1.9998'
          stroke='#D9D9D9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='1'
          y1='-1'
          x2='34'
          y2='-1'
          transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 29.8743 26.374)'
          stroke='#D9D9D9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconClose
