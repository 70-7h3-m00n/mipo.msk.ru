import stls from '@/styles/components/imgs/payment/ImgOnlinePayment.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/payment/online-payment.jpg'

const ImgOnlinePayment = ({ width = 0, height = 0 }: any) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Оплата онлайн'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        sizes={''}
      />
    </div>
  )
}

export default ImgOnlinePayment
