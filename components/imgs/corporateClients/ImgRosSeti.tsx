import stls from '@/styles/components/imgs/corporateClients/ImgRosSeti.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/corporateClients/rosSeti.jpg'

const ImgRosSeti = ({ name, width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt={name}
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgRosSeti
