import styles from './SignUpProgram.module.scss'
import { useAppSelector } from '@/state/hooks'
import Discount from '@/new-components/Items/Discount'
import FormApplication from '@/new-components/FormApplication'


export const SignUpProgram = () => {
  const { courseData } = useAppSelector(state => state.courseReducer)
  const data = courseData?.paymentTerms

  return (
    <section id={'cost'} className={'container'}>
      <h2 className={'header'}>запишитесь на программу</h2>

      <div className={styles.signUpProgram}>
        <div className={styles.wrapperPrice}>
          <div className={styles.wrapperData}>
            <div className={styles.data}>Зачисление: 24 мая</div>

            <div className={styles.data}>Срок обучения: {courseData?.monthsTraining}</div>
          </div>

          <h3 className={styles.header}>семейный психолог</h3>

          <h4 className={styles.text}>Обучение можно оплатить сразу или воспользоваться рассрочкой</h4>

          <Discount className={styles.discountWrapper} discount={courseData?.discount!} price={courseData?.price!} />

          <h4 className={styles.text}>Стоимость за весь курс:</h4>

          <div className={styles.wrapperCost}>
            <div className={styles.cost}>{data?.cost}</div>

            <s className={styles.discount}>{data?.discount}</s>
          </div>
        </div>

        <div className={styles.wrapperForm}>
          <h3 className={styles.header}>ЗАПИСАТЬСЯ НА КУРС ИЛИ ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСТУЛЬТАЦИЮ</h3>

          <FormApplication className={styles.form} textBtn={'ЗАПИСАТЬСЯ'} />

          <div className={styles.political}>Оформляя заявку, я согласен с политикой конфиденциальности и офертой</div>
        </div>

        <div className={styles.wrapperList}>
          <h3 className={styles.header}>ЧТО ВХОДИТ В СТОИМОСТЬ</h3>

          <ul className={styles.list}>
            {
              data?.list.slice(0, 5).map((item, index) => (
                <li className={styles.item} key={index}>{item.item}</li>
              ))
            }
          </ul>
        </div>

        <div className={styles.wrapperInfo}>
          <h2 className={styles.header}>ВОЗВРАТ ДЕНЕГ</h2>

          <p className={styles.description}>
            Если вы передумали учиться, мы вернем полную сумму в течение двух недель
          </p>
        </div>

        <div className={styles.wrapperInfo}>
          <h2 className={styles.header}>сэкономьте 13%</h2>

          <p className={styles.description}>
            Получите налоговый вычет, Все подробности у менеджера при записи на курс
          </p>
        </div>

        <div className={styles.wrapperInfo}>
          <h2 className={styles.header}>остались вопросы?</h2>

          <p className={styles.description}>
            Позвоните или напишите нам: <br />
            <span className={styles.phone}>+7 (495) 150-99-24</span>
          </p>
        </div>
      </div>
    </section>
  )
}
