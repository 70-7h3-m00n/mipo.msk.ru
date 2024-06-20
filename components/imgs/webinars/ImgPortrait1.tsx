import stls from '@/styles/components/imgs/webinars/ImgPortrait1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/webinars/portrait1.jpg'

const ImgPortrait1 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Портрет 1'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgPortrait1
