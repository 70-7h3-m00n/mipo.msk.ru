import styles from './styles.module.scss'

const ApplicationsContent = () => {

  return (
    <div className={styles.block}>
      <h3 className={styles.header}>появились сложности?</h3>

      <p className={styles.description}>
        Остались вопросы или не можете определиться с курсом?
        Оставьте свои контакты, мы свяжемся с вами и все расскажем.
      </p>

      <form className={styles.wrapperInput}>
        <input className={styles.input} placeholder={'Ваше имя'} />
        <input className={styles.input} placeholder={'+7 (999) 99-999-99'} />
        <input className={styles.input} placeholder={'Ваш email'} />
        <input className={styles.input} placeholder={'Промокод'} />
        <button className={styles.btn}>подобрать программу</button>
      </form>

      <div className={styles.political}>
        Оформляя заявку, я согласен с политикой конфиденциальности и офертой
      </div>
    </div>
  )
}

export default ApplicationsContent
