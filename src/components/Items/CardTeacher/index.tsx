import styles from './styles.module.scss'
import Image from 'next/image'
import url from '@/assets/image/Mock/teacher.png'

interface CardTeacher {
  imageUrl?: string
  title?: string
  description?: string
}

const CardTeacher = ({ imageUrl, title, description }: CardTeacher) => {
  return (
    <div className={styles.card}>
      <Image src={url} alt={'image'} fill />

      <div className={styles.wrapperContent}>
        <h3 className={styles.header}>ШАВЫРИНА АННА</h3>

        <p className={styles.description}>
          Кандидат психологических наук, практикующий психолог,
          коуч, эксперт в области работы мозга, психики и поведения
          человека.
        </p>
      </div>
    </div>
  )
}

export default CardTeacher
