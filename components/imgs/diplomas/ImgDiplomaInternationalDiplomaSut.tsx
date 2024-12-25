import stls from '@/styles/components/imgs/diplomas/ImgDiplomaInternational.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/diplomaPhyco.png'

const ImgDiplomaInternationalDiplomaSut = ({
  classNames = [],
  width,
  height
}: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Международный диплом'
      width={width}
      height={height}
    />
  )
}

export default ImgDiplomaInternationalDiplomaSut
