import styles from './styles.module.scss'
import Button from '../Button'
import Image from 'next/image'
import url from '../../assets/image/Mock/program.png'

const PopUpContentProgram = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.wrapperProgram}>
          <div className={styles.programItem}>
            <Image className={styles.wrapperImage} src={url} alt={'image'} />

            <div>
              <h3 className={styles.header}>Бизнес-образование MBA</h3>

              <p className={styles.description}>
                У вас будет доступ к вебинарам и видеолекциям. Вы сможете
                подключаться к синхронным занятиям и задавать вопросы
                преподавателям, или смотреть их в записи, в удобное время
              </p>
            </div>
          </div>

          <div className={styles.programItem}>
            <Image className={styles.wrapperImage} src={url} alt={'image'} />

            <div>
              <h3 className={styles.header}>Бизнес-образование MBA</h3>

              <p className={styles.description}>
                У вас будет доступ к вебинарам и видеолекциям. Вы сможете
                подключаться к синхронным занятиям и задавать вопросы
                преподавателям, или смотреть их в записи, в удобное время
              </p>
            </div>
          </div>

          <div className={styles.programItem}>
            <Image className={styles.wrapperImage} src={url} alt={'image'} />

            <div>
              <h3 className={styles.header}>Бизнес-образование MBA</h3>

              <p className={styles.description}>
                У вас будет доступ к вебинарам и видеолекциям. Вы сможете
                подключаться к синхронным занятиям и задавать вопросы
                преподавателям, или смотреть их в записи, в удобное время
              </p>
            </div>
          </div>
        </div>

        <Button text={'смотреть все'} active={true} styleOption={'square'} />
      </div>
    </div>
  )
}

export default PopUpContentProgram
