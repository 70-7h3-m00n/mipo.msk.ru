import styles from './styles.module.scss'
import Button from '../Button'

const FormApplication = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder={'Ваше имя'} />

      <input className={styles.input} placeholder={'+7 (999) 99-999-99'} />

      <input className={styles.input} placeholder={'Ваш email'} />

      <input className={styles.input} placeholder={'Промокод'} />

      <Button text={'подобрать программу'}
              styleOption={'square'}
              style={{
                backgroundColor: 'black',
                color: 'white',
              }}
      />

      <div className={styles.politics}>Оформляя заявку, я согласен с политикой конфиденциальности и офертой</div>
    </form>
  )
}

export default FormApplication
