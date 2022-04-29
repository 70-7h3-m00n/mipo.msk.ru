import stls from '@/styles/components/imgs/sections/SectionRelevantContentOnly/ImgSectionRelevantContentOnlyImages.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionRelevantContentOnly/images.png'

type TypeImgSectionRelevantContentOnlyImagesProps = TPropClassNames &
  TGeneralImg

const ImgSectionRelevantContentOnlyImages = ({
  classNames,
  width,
  height
}: TypeImgSectionRelevantContentOnlyImagesProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Аудитории и съёмки'}
      />
    </>
  )
}

export default ImgSectionRelevantContentOnlyImages
