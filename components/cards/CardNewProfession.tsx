import styles from '@/styles/components/cards/CardNewProfession.module.sass'
import { ListProfession } from '@/data/lists/listProfession'
import { ImgTemplate } from '@/components/imgs'

const CardNewProfession = ({ title, image, description, index }: ListProfession) => {
  const background = title !== 'Пройдите обучение' ?
    'linear-gradient(337deg, #EEDEF3 -21.52%, #E6F5F9 96.7%)'
    :
    'linear-gradient(337deg, #F36F56 -21.52%, #FFE6AE 96.7%)'

  return (
    <div className={styles.card}
         style={{
           background
         }}
    >
      <div className={styles.wrapperTopBlock}>
        <h2 className={styles.header}>{title}</h2>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.wrapperBottomBlock}>
        <div className={styles.wrapperCounter}>
          <div className={styles.header}>0{index}</div>
        </div>

        <div className={styles.wrapperImage}>
          <ImgTemplate src={image} alt={'image'} layout={'fill'} />
        </div>
      </div>
    </div>
  )
}

export default CardNewProfession
