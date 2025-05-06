import stls from './index.module.sass'
import truncate from 'truncate'
import Popup from 'reactjs-popup'
import { BtnText } from '@/components/btns'
import { PopupReview } from '@/components/popups'

const NewCardReview = ({ title, photo, name, occupation, story }) => {
  return (
    <article className={stls.container}>
      <div className={stls.img}>{photo}</div>
      <div className={stls.content}>
        <h3 className={stls.title} title={title}>
          {truncate(title, 65)}
        </h3>
        <div className={stls.text}>
          <div className={stls.name}>{name}</div>
          <p className={stls.occupation}>{occupation}</p>
        </div>
        <Popup
          trigger={
            <div>
              <BtnText text='Читать историю' />
            </div>
          }
          modal
          nested>
          {close => (
            <PopupReview
              title={title}
              photo={photo}
              name={name}
              occupation={occupation}
              story={story}
              close={close}
            />
          )}
        </Popup>
      </div>
    </article>
  )
}

export default NewCardReview
