import styles from './styles.module.scss'
import Button from '../Button'
import Image from 'next/image'
import url from '../../assets/image/puzzles.png'

const BlockHelp = () => {
  return (
    <div className={styles.blockHelp}>
      <h3 className={styles.header}>ПОМОЧЬ В ПОДБОРЕ ПРОГРАММЫ</h3>

      <form className={styles.form}>
        <input placeholder={'Ваше имя'} />
        <input placeholder={'+7 (999) 99-999-99'} />
        <input placeholder={'Ваш email'} />
        <input placeholder={'Промокод'} />
        <Button text={'подобрать программу'}
                styleOption={'square'}
                style={{
                  backgroundColor: 'black',
                  color: 'white'
                }}
        />
      </form>

      <div className={styles.textPolitic}>
        Оформляя заявку, я согласен с политикой конфиденциальности и офертой
      </div>

      <div className={styles.wrapperImage}>
        <Image src={url} alt={'image'} fill />
      </div>
    </div>
  )
}

export default BlockHelp
