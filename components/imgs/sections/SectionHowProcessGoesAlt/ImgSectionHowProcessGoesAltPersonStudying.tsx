import stls from '@/styles/components/imgs/sections/SectionHowProcessGoesAlt/ImgSectionHowProcessGoesAltPersonStudying.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionHowProcessGoesAlt/person-studying.jpg'

type TypeImgSectionHowProcessGoesAltPersonStudyingProps = TPropClassNames &
  TGeneralImg

const ImgSectionHowProcessGoesAltPersonStudying = ({
  classNames,
  width,
  height
}: TypeImgSectionHowProcessGoesAltPersonStudyingProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Человек обучаются'}
      />
    </>
  )
}

export default ImgSectionHowProcessGoesAltPersonStudying
