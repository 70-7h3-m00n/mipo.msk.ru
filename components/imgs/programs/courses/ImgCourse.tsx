import stls from '@/styles/components/imgs/programs/courses/ImgCourse.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/programs/courses/course-2.jpg'

const ImgCourse = ({ classNames = [], src, alt, width, height }: TypeImg) => {
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

export default ImgCourse
