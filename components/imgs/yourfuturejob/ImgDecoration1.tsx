import stls from '@/styles/components/imgs/yourfuturejob/ImgDecoration1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/yourfuturejob/decoration1.jpg'

const ImgDecoration1 = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Человек обучает ребёнка'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgDecoration1
