import stls from '@/styles/components/imgs/diplomas/ImgSupplementBack.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/supplement-back.jpg'

const ImgSupplementBack = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Сапплемент оборот'
      width={width}
      height={height}
    />
  )
}

export default ImgSupplementBack
