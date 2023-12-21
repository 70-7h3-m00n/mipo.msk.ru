import styles from '@/styles/components/cards/CardNewTeacher.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { StaticImageData } from 'next/image'

type Props = {
  url: string | StaticImageData
  title: string
  subTitle: string
  description: string
}
const CardNewTeacher = ({url, title, subTitle, description}: Props) => {
  return (
    <li className={styles.cardNewTeacher}>
      <div className={styles.wrapperImage}>
        <ImgTemplate src={url} alt={'image'} layout={'fill'} classNames={[styles.image]} />
      </div>

      <div className={styles.wrapperHeaders}>
        <h2>{title}</h2>

        <h3>{subTitle}</h3>
      </div>

      <div className={styles.wrapperDescription}>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default CardNewTeacher
