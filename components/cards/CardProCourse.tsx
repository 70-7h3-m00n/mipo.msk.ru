import styles from '@/styles/components/cards/CardProCourse.module.sass'
import data from '@/data/mock/new-course/data.json'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import { ImgTemplate } from '@/components/imgs'
import urlStar from '@/public/assets/imgs/new-course/star.png'
import WrapperPrice from '@/components/cards/WrapperPrice'

const CardProCourse = () => {
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
