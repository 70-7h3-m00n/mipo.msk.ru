import Link from 'next/link';

import styles from '@/components/HeaderDefault/HeaderDefault.module.scss';
import HeaderMobile from '@/components/HeaderMobile';
import ToScrollElement from '@/components/ToScrollElement';
import LogoSvg from '@/SvgComponents/LogoSvg';

const arrayScrollBlock = [
  {
    id: 'learningProcess',
    text: 'ПРОЦЕСС ОБУЧЕНИЯ',
  },
  {
    id: 'curriculum',
    text: 'учебный план',
  },
  {
    id: 'teachers',
    text: 'Преподаватели',
  },
  {
    id: 'cost',
    text: 'Стоимость',
  },
  {
    id: 'reviews',
    text: 'Отзывы',
  },
];

export const HeaderCourse = () => {
  return (
    <header className={styles.wrapperRelative}>
      <div className={'container'}>
        <div className={styles.header}>
          <nav className={styles.menuCourse}>
            <div className={styles.blockLeft}>
              <Link href={'/'} passHref>
                <LogoSvg />
              </Link>
            </div>

            <div className={styles.blockMid}>
              {arrayScrollBlock.map(item => (
                <ToScrollElement idElement={item.id} key={item.id}>
                  <div className={styles.text}>{item.text}</div>
                </ToScrollElement>
              ))}
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
  );
};
