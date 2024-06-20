import stls from '@/styles/components/imgs/forWhom/ImgForWhomPhoneTablet.module.sass'
import { TGeneralImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import { useCheckIfResourseExists } from '@/hooks/index'
import defaultSrc from '@/public/assets/imgs/forWhom/forWhom-phone-tablet.jpg'

const ImgForWhomPhoneTablet = ({
  classNames = [],
  src,
  alt,
  width,
  height
}: TGeneralImg) => {
  const isImage = ''

  return (
    <ImgTemplate
      classNames={classNames}
      src={isImage && src ? src : defaultSrc}
      alt={alt || 'Человек в работе'}
      width={width}
      height={height}
    />
  )
}

export default ImgForWhomPhoneTablet
