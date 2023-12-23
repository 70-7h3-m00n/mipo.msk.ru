import BtnNewCourse from '@/components/btns/BtnNewCourse'
import styles from '@/styles/components/cards/CardPriceNew.module.sass'
import fetchCourse from '../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const CardPriceNew = ({data}:Props) => {
  const fullInstallmentPlan = data.installmentPlan + ((data.installmentPlan / 100) * 40)
  const fullOneTimePayment = data.oneTimePayment + ((data.oneTimePayment / 100) * 40)

  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.header}>{data.nameCourse}</h3>

        <div className={styles.table}>
          <div>
            <h4>Срок обучения:</h4>
            <p>{data.trainingMonths}</p>
          </div>

          <div>
            <h4>Зачисление:</h4>
            <p>{data.enrollment}</p>
          </div>

          <div>
            <h4>Форма обучения:</h4>
            <p>{data.oneTimePayment}</p>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.paymentBlock}>
          <h3 className={styles.text}>Беспроцентная рассрочка на 12 месяцев</h3>
          <p className={styles.payment}>{data.installmentPlan.toLocaleString('ru-RU')}<span> ₽/мес</span></p>
          <p className={styles.fullPayment}>{fullInstallmentPlan.toLocaleString('ru-RU')}<span> ₽/мес</span></p>
        </div>

        <div className={styles.paymentBlock}>
          <h3 className={styles.text}>Единоразовый платёж</h3>
          <p className={styles.payment}>{data.oneTimePayment.toLocaleString('ru-RU')}<span> ₽/мес</span></p>
          <p className={styles.fullPayment}>{fullOneTimePayment.toLocaleString('ru-RU')}<span> ₽/мес</span></p>
        </div>
      </div>

      <div className={styles.wrapperBtn}>
        <BtnNewCourse text={'Записаться на курс'} />
        <BtnNewCourse text={'Задать вопрос'} className={styles.btn} />
      </div>
    </div>
  )
}

export default CardPriceNew
