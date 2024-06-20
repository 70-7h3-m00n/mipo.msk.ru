import styles from './BlockHelp.module.scss'
import ButtonLink from '../ButtonLink'
import Image from 'next/image'
import url from '../../assets/image/puzzles.png'
import Link from 'next/link'

export const BlockHelp = () => {
  return (
    <div className={styles.blockHelp}>
      <h3 className={styles.header}>ПОМОЧЬ В ПОДБОРЕ ПРОГРАММЫ</h3>

      <form className={styles.form}>
        <input placeholder={'Ваше имя'} />

        <input placeholder={'+7 (999) 99-999-99'} />

        <input placeholder={'Ваш email'} />

        <input placeholder={'Промокод'} />

        <ButtonLink text={'подобрать программу'}
                    className={styles.btnSubmit}
                    styleOption={'square'}
                    style={{
                      backgroundColor: 'black',
                      color: 'white'
                    }}
        />
      </form>

      <div className={styles.textPolitic}>
        Оформляя заявку, я согласен &nbsp;
        <Link className={styles.linkPolitic} href={'/policies/privacy.pdf'} target={'_blank'} >
          с политикой конфиденциальности и офертой
        </Link>
      </div>

      <div className={styles.wrapperImage}>
        <Image sizes={''} src={url} alt={'image'} fill />
      </div>
    </div>
  )
}
