import styles from '@/styles/components/cards/CardProCourse.module.sass'
import { ImgTemplate } from '@/components/imgs'
import urlStar from '@/public/assets/imgs/new-course/star.png'
import WrapperPrice from '@/components/cards/WrapperPrice'
import fetchCourse from '../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const CardProCourse = ({data}:Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperHeader}>
        <ImgTemplate src={urlStar} alt={'img'} width={34} height={32} />

        <h2 className={styles.header}>PRO</h2>
      </div>

      <h3 className={styles.subHeader}>Самое нужное для профи</h3>

      <WrapperPrice text={data.textPro}
                    prise={data.prisePro}
                    counterLesson={data.lessonProCounter}
                    counterClass={data.classProCounter}
      />
    </div>
  )
}

export default CardProCourse
