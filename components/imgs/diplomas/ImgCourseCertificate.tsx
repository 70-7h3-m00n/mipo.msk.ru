import stls from '@/styles/components/imgs/diplomas/ImgCourseCertificate.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/course-certificate.jpg'

const ImgCourseCertificate = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Сертификат'
      width={width}
      height={height}
    />
  )
}

export default ImgCourseCertificate
