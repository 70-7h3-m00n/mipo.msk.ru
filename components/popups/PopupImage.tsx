import stls from '@/styles/components/popups/PopupImage.module.sass'
import { BtnClose } from '@/components/btns'

const PopupImage = ({ image, close }: any) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <div className={stls.image}>{image}</div>
    </div>
  )
}

export default PopupImage
