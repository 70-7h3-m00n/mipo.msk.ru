import stls from '@/styles/components/icons/IconSearch.module.sass'

const IconNewMenuArrowDown = () => {
  return (
    <div className={stls.container}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L17.3033 10.7574C17.5962 10.4645 17.5962 9.98959 17.3033 9.6967C17.0104 9.40381 16.5355 9.40381 16.2426 9.6967L12 13.9393L7.75736 9.6967C7.46447 9.40381 6.98959 9.40381 6.6967 9.6967C6.40381 9.98959 6.40381 10.4645 6.6967 10.7574L11.4697 15.5303ZM12 14H11.25V15H12H12.75V14H12Z'
          fill='currentColor'
        />
      </svg>
    </div>
  )
}

export default IconNewMenuArrowDown
