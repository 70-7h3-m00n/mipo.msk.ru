import stls from '@/styles/components/imgs/diplomas/ImgDiplomaInternational.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/international-diploma.jpg'

const ImgDiplomaInternational = ({
  classNames = [],
  width,
  height
}: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Международный диплом ID'
      width={width}
      height={height}
    />
  )
}

export default ImgDiplomaInternational
