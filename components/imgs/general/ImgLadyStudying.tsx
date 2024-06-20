import stls from '@/styles/components/imgs/general/ImgLadyStudying.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/lady-studying.jpg'

const ImgLadyStudying = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Девушка за ноутбуком обучается'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgLadyStudying
