import stls from '@/styles/components/popups/PopupReview.module.sass'
import { BtnClose } from '@/components/btns'

const PopupReview = ({ title, photo, name, occupation, story, close }: any) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <div className={stls.img}>{photo}</div>
      <div className={stls.content}>
        <h3 className={stls.title} title={title}>
          {title}
        </h3>
        <div className={stls.text}>
          <p className={stls.name}>{name}</p>
          <p className={stls.occupation}>{occupation}</p>
        </div>
        <div className={stls.story}>{story}</div>
      </div>
    </div>
  )
}

export default PopupReview
