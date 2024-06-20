import stls from '@/styles/components/imgs/forWhom/ImgForWhom.module.sass'
import { TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import { useCheckIfResourseExists } from '@/hooks/index'
import defaultSrc from '@/public/assets/imgs/forWhom/forWhom.jpg'

const ImgForWhom = ({
  classNames = [],
  src,
  alt,
  width,
  height
}: TGeneralImg) => {
  const isImage = ''

  return (
    <ImgTemplate
      classNames={[cn(stls.container, classNames)]}
      src={isImage && src ? src : defaultSrc}
      alt={alt || 'Человек в работе'}
      width={width}
      height={height}
      layout='fill'
    />
  )
}

export default ImgForWhom
