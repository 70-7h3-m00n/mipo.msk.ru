import stls from '@/styles/components/imgs/diplomas/ImgDiplomaInternational.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/diploma_mba.png'

const ImgDiplomaInternationalMba = ({
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

export default ImgDiplomaInternationalMba
