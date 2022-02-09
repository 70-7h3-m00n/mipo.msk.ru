import stls from '@/styles/components/imgs/forWhom/ImgForWhomPhoneTablet.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/forWhom/forWhom-phone-tablet.jpg'

const ImgForWhomPhoneTablet = ({
  classNames = [],
  src,
  alt,
  width,
  height
}: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt={alt || 'Человек в работе'}
      width={width}
      height={height}
    />
  )
}

export default ImgForWhomPhoneTablet
