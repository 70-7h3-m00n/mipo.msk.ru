import stls from '@/styles/components/imgs/programs/courses/ImgCourse.module.sass'
import { TGeneralImg } from '@/types/index'
import { useContext } from 'react'
import { useCheckIfResourseExists } from '@/hooks/index'
import ProgramContext from '@/context/program/programContext'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/programs/courses/course-2.jpg'
import defaultSrcAlt from '@/public/assets/imgs/programs/courses/course-3.jpg'

const ImgCourse = ({
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
      src={isImage}
      alt={alt || 'Человек в работе'}
      width={width}
      height={height}
      priority
    />
  )
}

export default ImgCourse
