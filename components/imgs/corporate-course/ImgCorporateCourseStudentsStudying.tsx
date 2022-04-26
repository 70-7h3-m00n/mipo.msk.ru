import stls from '@/styles/components/imgs/corporate-course/ImgCorporateCourseStudentsStudying.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporate-course/ImgCorporateCourseStudentsStudying.jpg'

type TypeImgCorporateCourseStudentsStudyingProps = TPropClassNames & TGeneralImg

const ImgCorporateCourseStudentsStudying = ({
  classNames,
  width,
  height
}: TypeImgCorporateCourseStudentsStudyingProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Люди обучаются'}
      />
    </>
  )
}

export default ImgCorporateCourseStudentsStudying
