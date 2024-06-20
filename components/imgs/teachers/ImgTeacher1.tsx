import stls from '@/styles/components/imgs/teachers/ImgTeacher1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/teachers/teacher-1.jpg'

const ImgTeacher1 = ({ name, width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt={name}
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgTeacher1
