import stls from '@/styles/components/imgs/sections/SectionTrustedByAlt/ImgSectionTruestedByAltRzhdLogo.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionTrustedByAlt/rzhd-logo.png'

type TypeImgSectionTruestedByAltRzhdLogoProps = TPropClassNames & TGeneralImg

const ImgSectionTruestedByAltRzhdLogo = ({
  classNames,
  width,
  height
}: TypeImgSectionTruestedByAltRzhdLogoProps) => {
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

export default ImgSectionTruestedByAltRzhdLogo
