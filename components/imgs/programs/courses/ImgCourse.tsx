import stls from '@/styles/components/imgs/programs/courses/ImgCourse.module.sass'
import { TGeneralImg } from '@/types/index'
import { useCheckIfResourseExists } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/programs/courses/course-2.jpg'

const ImgCourse = ({
  classNames = [],
  src,
  alt,
  width,
  height
}: TGeneralImg) => {
  const isImage = useCheckIfResourseExists({ src })

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

export default ImgCourse
