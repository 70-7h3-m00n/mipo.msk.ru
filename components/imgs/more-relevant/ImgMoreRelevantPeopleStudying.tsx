import stls from '@/styles/components/imgs/more-relevant/ImgMoreRelevantPeopleStudying.module.sass'
import { TPropClassNames, TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/more-relevant/people-studying.jpg'

type TypeImgMoreRelevantPeopleStudyingProps = TPropClassNames & TGeneralImg

const ImgMoreRelevantPeopleStudying = ({
  classNames,
  width,
  height
}: TypeImgMoreRelevantPeopleStudyingProps) => {
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

export default ImgMoreRelevantPeopleStudying
