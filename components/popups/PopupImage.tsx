import stls from '@/styles/components/popups/PopupImage.module.sass'
import { BtnClose } from '@/components/btns'
import cn from 'classnames'
const PopupImage = ({ image, close, forDiplomas = false }) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <div className={cn(stls.image, forDiplomas && stls.forDiplomas)}>
        {image}
      </div>
    </div>
  )
}

export default PopupImage
