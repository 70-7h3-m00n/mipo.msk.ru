import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import { StaticImageData } from 'next/image'
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
  unoptimized?: boolean
  layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  priority?: boolean
}

const ImgTemplate = ({
  classNames = [],
  width,
  height,
  src,
  alt,
  unoptimized = false,
  layout,
  objectFit,
  priority
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
          unoptimized={unoptimized}
          layout={layout}
          {...(priority ? { priority } : undefined)}
        />
      )}
    </div>
  )
}

export default ImgTemplate
