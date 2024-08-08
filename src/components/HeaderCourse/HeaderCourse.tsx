import styles from '../HeaderDefault/HeaderDefault.module.scss'
import HeaderMobile from '@/new-components/HeaderMobile'
import Link from 'next/link'
import LogoSvg from '../../SvgComponents/LogoSvg'
import ToScrollElement from '@/new-components/ToScrollElement'

const arrayScrollBlock = [
  {
    id: 'learningProcess',
    text: 'ПРОЦЕСС ОБУЧЕНИЯ'
  },
  {
    id: 'curriculum',
    text: 'учебный план'
  },
  {
    id: 'teachers',
    text: 'Преподаватели'
  },
  {
    id: 'cost',
    text: 'Стоимость'
  },
  {
    id: 'reviews',
    text: 'Отзывы'
  }
]

export const HeaderCourse = () => {
  return (
    <header className={styles.wrapperRelative}>
      <div className={ 'container'}>
        <div className={styles.header}>
          <nav className={styles.menuCourse}>
            <div className={styles.blockLeft}>
              <Link href={'/'} passHref>
                <LogoSvg />
              </Link>
            </div>

            <div className={styles.blockMid}>
              {
                arrayScrollBlock.map((item) => (
                  <ToScrollElement idElement={item.id} key={item.id}>
                    <div className={styles.text}>{item.text}</div>
                  </ToScrollElement>
                ))
              }
            </div>

            <div className={styles.blockRight}>
              <Link className={styles.text} href={'/'}>
                ВОЙТИ
              </Link>
            </div>
          </nav>
        </div>

        <HeaderMobile />
      </div>
    </header>
  )
}
