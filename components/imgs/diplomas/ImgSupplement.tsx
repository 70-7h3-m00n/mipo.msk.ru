import stls from '@/styles/components/imgs/diplomas/ImgSupplement.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/supplement.jpg'

const ImgSupplement = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Сапплемент'
      width={width}
      height={height}
    />
  )
}

export default ImgSupplement
