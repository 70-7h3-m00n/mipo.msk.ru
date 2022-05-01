import stls from '@/styles/components/imgs/sections/SectionTrustedByAlt/ImgSectionTruestedByAltVtbLogo.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionTrustedByAlt/vtb-logo.png'

type TypeImgSectionTruestedByAltVtbLogoProps = TPropClassNames & TGeneralImg

const ImgSectionTruestedByAltVtbLogo = ({
  classNames,
  width,
  height
}: TypeImgSectionTruestedByAltVtbLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={'Lenovo'}
      />
    </>
  )
}

export default ImgSectionTruestedByAltVtbLogo
