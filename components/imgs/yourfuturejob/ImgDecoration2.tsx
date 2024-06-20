import stls from '@/styles/components/imgs/yourfuturejob/ImgDecoration2.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/yourfuturejob/decoration2.jpg'

const ImgDecoration2 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Человек работает'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgDecoration2
