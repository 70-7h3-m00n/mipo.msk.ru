import styles from './CardTeacher.module.scss'
import Image from 'next/image'

interface CardTeacher {
  imageUrl: string
  name: string
  description: string
}

export const CardTeacher = ({ imageUrl, name, description }: CardTeacher) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={'image'} fill loading={'lazy'} />

      <div className={styles.wrapperContent}>
        <h3 className={styles.header}>{name}</h3>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
