import stls from '@/styles/components/imgs/fullprogram/ImgFullProgram1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/fullprogram/fullprogram1.jpg'

const ImgFullProgram1 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Полная программа'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgFullProgram1
