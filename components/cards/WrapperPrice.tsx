import styles from '@/styles/components/cards/WrapperPrice.module.sass'
import BtnNewCourse from '@/components/btns/BtnNewCourse'

interface Props {
  text: string
  counterLesson: number
  counterClass: number
  prise: number | string
}
const WrapperPrice = ({ text, counterLesson, counterClass, prise }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{text}</p>

      <div className={styles.access}>Доступ — навсегда</div>

      <p className={styles.prise}>{prise}<span className={styles.currency}> ₽/мес</span></p>

      <div className={styles.wrapperProgram}>
        <div className={styles.lesson}>{counterLesson} урок</div>

        <div className={styles.class}>{counterClass} занятий</div>
      </div>
      <div className={styles.wrapperBtn}>
        <BtnNewCourse text={'Записаться на курс'}

        />
      </div>
    </div>
  )
}

export default WrapperPrice
