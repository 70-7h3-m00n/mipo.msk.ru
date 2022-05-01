import stls from '@/styles/components/imgs/sections/SectionTrustedByAlt/ImgSectionTruestedByAltRosneft.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/sections/SectionTrustedByAlt/rosneft-logo.png'

type TypeImgSectionTruestedByAltRosneftProps = TPropClassNames & TGeneralImg

const ImgSectionTruestedByAltRosneft = ({
  classNames,
  width,
  height
}: TypeImgSectionTruestedByAltRosneftProps) => {
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

export default ImgSectionTruestedByAltRosneft
