import stls from '@/styles/components/icons/IconSearch.module.sass'

const IconNewMenu = () => {
  return (
    <div className={stls.container}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line
          x1='2'
          y1='5'
          x2='22'
          y2='5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinejoin='round'
        />
        <line
          x1='2'
          y1='19'
          x2='22'
          y2='19'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinejoin='round'
        />
        <line
          x1='2'
          y1='12'
          x2='12'
          y2='12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconNewMenu
