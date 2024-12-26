import stls from '@/styles/components/icons/IconHumburger.module.sass'

interface Props {
  color?: string
}

const IconHumburger = ({ color = 'white' }: Props) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 35 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Меню</title>
        <line
          x1='1'
          y1='1'
          x2='34'
          y2='1'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='1'
          y1='10'
          x2='34'
          y2='10'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='1'
          y1='19'
          x2='34'
          y2='19'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconHumburger
