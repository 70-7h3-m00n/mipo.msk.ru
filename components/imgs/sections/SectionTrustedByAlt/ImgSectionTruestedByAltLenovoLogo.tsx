import stls from '@/styles/components/imgs/sections/SectionTrustedByAlt/ImgSectionTruestedByAltLenovoLogo.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionTrustedByAlt/lenovo-logo.png'

type TypeImgSectionTruestedByAltLenovoLogoProps = TPropClassNames & TGeneralImg

const ImgSectionTruestedByAltLenovoLogo = ({
  classNames,
  width,
  height
}: TypeImgSectionTruestedByAltLenovoLogoProps) => {
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

export default ImgSectionTruestedByAltLenovoLogo
