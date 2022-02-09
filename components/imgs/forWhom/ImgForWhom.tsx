import stls from '@/styles/components/imgs/forWhom/ImgForWhom.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/forWhom/forWhom.jpg'

const ImgForWhom = ({ classNames = [], src, alt, width, height }: TypeImg) => {
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

export default ImgForWhom
