import stls from '@/styles/components/imgs/legal/ImgLicence.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/legal/licence.jpg'

const ImgLicence = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Лицензия'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgLicence
