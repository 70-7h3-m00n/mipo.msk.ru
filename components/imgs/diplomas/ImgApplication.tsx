import stls from '@/styles/components/imgs/diplomas/ImgApplication.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/application.jpg'

const ImgApplication = ({ classNames = [], width, height }: TypeImg) => {
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

export default ImgApplication
