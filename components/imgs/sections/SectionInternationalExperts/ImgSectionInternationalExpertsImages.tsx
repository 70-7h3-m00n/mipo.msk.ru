import stls from '@/styles/components/imgs/sections/SectionInternationalExperts/ImgSectionInternationalExpertsImages.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionInternationalExperts/images.png'

type TypeImgSectionInternationalExpertsImagesProps = TPropClassNames &
  TGeneralImg

const ImgSectionInternationalExpertsImages = ({
  classNames,
  width,
  height
}: TypeImgSectionInternationalExpertsImagesProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Эксперты по всему миру'}
      />
    </>
  )
}

export default ImgSectionInternationalExpertsImages
