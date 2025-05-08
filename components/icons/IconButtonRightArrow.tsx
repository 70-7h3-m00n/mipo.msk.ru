import stls from '@/styles/components/icons/IconSearch.module.sass'

const IconButtonRightArrow = () => {
  return (
    <div className={stls.container}>
      <svg
        fill='#000000'
        viewBox='0 0 24 24'
        id='right-arrow'
        data-name='Flat Color'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          id='primary'
          d='M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z'
          style={{ fill: 'rgb(0, 0, 0)' }}></path>
      </svg>
    </div>
  )
}

export default IconButtonRightArrow
