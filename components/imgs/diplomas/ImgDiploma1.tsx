import stls from '@/styles/components/imgs/diplomas/ImgDiploma1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma-1.jpg'

const ImgDiploma1 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Диплом 1'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgDiploma1
