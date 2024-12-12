import stls from '@/styles/components/icons/IconBgCircle.module.sass'

const IconBgCircle = () => {
  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 365 365'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label='Круглый фон'>
        <rect width='365' height='365' rx='180' fill='#3290FF' />
      </svg>
    </div>
  )
}

export default IconBgCircle
