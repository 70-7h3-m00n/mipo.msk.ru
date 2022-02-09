import stls from '@/styles/components/imgs/teachers/ImgTeacher.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'
import defaultSrcAtMeetYourTeachers from '@/public/assets/imgs/teachers/teacher-default-large.png'

const ImgTeacher = ({
  classNames = [],
  src,
  alt,
  width,
  height,
  atMeetYourTeachers
}: TypeImg & { atMeetYourTeachers?: boolean }) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={
        src || (atMeetYourTeachers ? defaultSrcAtMeetYourTeachers : defaultSrc)
      }
      alt={alt || 'Преподаватель'}
      width={width}
      height={height}
    />
  )
}

export default ImgTeacher
