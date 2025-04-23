import stls from './index.module.sass'
import Image from 'next/image'

interface Props {
  imageSrc?: string
}

const ImagePartnerBlock = ({
  imageSrc = '/assets/imgs/hardereducation/nofoto.jpeg'
}: Props) => {
  return (
    <div className={stls.component}>
      <div className={stls.image}>
        <Image src={imageSrc} alt='Изображение партнера' layout='fill' />
      </div>
    </div>
  )
}

export default ImagePartnerBlock
