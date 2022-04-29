import stls from '@/styles/components/imgs/sections/SectionOurGraduates/ImgSectionOurGraduatesPeopleStudying.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionOurGraduates/people-studying.jpg'

type TypeImgSectionOurGraduatesPeopleStudyingProps = TPropClassNames &
  TGeneralImg

const ImgSectionOurGraduatesPeopleStudying = ({
  classNames,
  width,
  height
}: TypeImgSectionOurGraduatesPeopleStudyingProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Студенты обучаются'}
      />
    </>
  )
}

export default ImgSectionOurGraduatesPeopleStudying
