import stls from '@/styles/components/imgs/cta/ImgCta1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/cta/cta1.png'

const ImgCta1 = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Девушка в очках и с книгой'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgCta1
