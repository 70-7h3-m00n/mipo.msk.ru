import styles from '@/styles/components/cards/CardSmartCourse.module.sass'
import WrapperPrice from '@/components/cards/WrapperPrice'
import fetchCourse from '../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const CardSmartCourse = ({data}:Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperHeader}>
        <h2 className={styles.header}>Смарт</h2>

        <h3 className={styles.subHeader}>Самое нужное для новичков</h3>
      </div>

      <WrapperPrice text={data.textSmart}
                    prise={data.priseSmart}
                    counterLesson={data.lessonSmartCounter}
                    counterClass={data.classSmartCounter}
      />
    </div>
  )
}

export default CardSmartCourse
