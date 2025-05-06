import stls from '@/styles/components/icons/IconHumburger.module.sass'

const IconCross = () => {
  return (
    <div className={stls.container}>
      <svg
        width='35'
        height='36'
        viewBox='0 0 35 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line
          x1='4.96094'
          y1='29.2791'
          x2='28.2955'
          y2='5.94462'
          stroke='#1A1A1A'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='6.37515'
          y1='6.02148'
          x2='29.7097'
          y2='29.356'
          stroke='#1A1A1A'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCross
