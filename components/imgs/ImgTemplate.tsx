import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { base64pixel } from '@/config/index'

type ImgTemplateType = {
  classNames?: string[]
  src: StaticImageData | string
  alt: string
  width?: number
  height?: number
}

const ImgTemplate = ({
  classNames = [],
  width,
  height,
  src,
  alt
}: ImgTemplateType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>
      {src && (
        <Image
          src={src}
          alt={alt}
          width={width || undefined}
          height={height || undefined}
          className={stls.img}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      )}
    </div>
  )
}

export default ImgTemplate
