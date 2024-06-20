import stls from '@/styles/components/imgs/yourfuturejob/ImgDecoration3.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/yourfuturejob/decoration3.jpg'

const ImgDecoration3 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Человек работает удалённо'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgDecoration3
