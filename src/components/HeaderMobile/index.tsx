import styles from './styles.module.scss'
import { MenuAboutInstitute } from '../../data/menu'
import Link from 'next/link'
import { useState } from 'react'
import SearchInput from '../SearchInput'

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openProgramLink, setOpenProgramLink] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.topContent}>
        <Link href={'/'} className={styles.logoWrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" width="166" height="35" viewBox="0 0 166 35" fill="none">
            <path
              d="M147.494 35C143.804 35 140.565 34.2671 137.776 32.8013C135.015 31.3355 132.861 29.3013 131.311 26.6987C129.762 24.0662 128.988 21 128.988 17.5C128.988 14 129.762 10.9487 131.311 8.34615C132.861 5.71367 135.015 3.66453 137.776 2.19872C140.565 0.732907 143.804 0 147.494 0C151.184 0 154.409 0.732907 157.169 2.19872C159.958 3.66453 162.127 5.71367 163.676 8.34615C165.225 10.9487 166 14 166 17.5C166 21 165.225 24.0662 163.676 26.6987C162.127 29.3013 159.958 31.3355 157.169 32.8013C154.409 34.2671 151.184 35 147.494 35ZM147.494 28.2244C149.804 28.2244 151.789 27.7906 153.451 26.9231C155.141 26.0556 156.437 24.8141 157.338 23.1987C158.268 21.5833 158.733 19.6838 158.733 17.5C158.733 15.3162 158.268 13.4167 157.338 11.8013C156.437 10.1859 155.141 8.94444 153.451 8.07692C151.789 7.2094 149.804 6.77564 147.494 6.77564C145.212 6.77564 143.226 7.2094 141.536 8.07692C139.846 8.94444 138.536 10.1859 137.607 11.8013C136.706 13.4167 136.255 15.3162 136.255 17.5C136.255 19.6838 136.706 21.5833 137.607 23.1987C138.536 24.8141 139.846 26.0556 141.536 26.9231C143.226 27.7906 145.212 28.2244 147.494 28.2244Z"
              fill="#3F3BFF" />
            <path
              d="M124.047 0.673076V34.3269H116.907V3.94872L120.16 7.40385H95.6121L98.8655 3.94872V34.3269H91.6827V0.673076H124.047Z"
              fill="#3F3BFF" />
            <path
              d="M50.9578 34.3269V0.673076H57.9715V30.4679L55.8167 30.0192L75.8439 0.673076H85.1816V34.3269H78.1678V4.12821L80.3226 4.57692L60.0419 34.3269H50.9578Z"
              fill="#3F3BFF" />
            <path
              d="M44.4909 0.673076V34.3269H37.6462V3.23077L39.463 3.36538L25.9425 34.3269H18.5485L5.02794 3.45513L6.80251 3.27564V34.3269H0V0.673076H11.0277L23.7877 30.6474H20.7033L33.4633 0.673076H44.4909Z"
              fill="#3F3BFF" />
          </svg>
        </Link>

        <div className={styles.burgerWrapper}>
          <svg style={{ display: openMenu && 'none' }} onClick={() => setOpenMenu(true)} width="60" height="60"
               viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="12" fill="#3F3BFF" />
            <rect x="10" y="19" width="40" height="4" rx="2" fill="white" />
            <rect x="10" y="28" width="40" height="4" rx="2" fill="white" />
            <rect x="10" y="37" width="40" height="4" rx="2" fill="white" />
          </svg>

          <div className={styles.wrapperSvg} style={{ display: !openMenu && 'none' }}>
            <svg onClick={() => setOpenSearch(true)} xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                 viewBox="0 0 22 22" fill="none">
              <path
                d="M15.5818 14.8702C15.3866 14.6749 15.07 14.6748 14.8747 14.87C14.6794 15.0652 14.6792 15.3817 14.8744 15.5771L15.5818 14.8702ZM20.6463 21.3534L20.9997 21.7071L21.7071 21.0003L21.3537 20.6466L20.6463 21.3534ZM14.8744 15.5771L20.6463 21.3534L21.3537 20.6466L15.5818 14.8702L14.8744 15.5771ZM17.1667 9.33333C17.1667 13.6595 13.6595 17.1667 9.33333 17.1667V18.1667C14.2118 18.1667 18.1667 14.2118 18.1667 9.33333H17.1667ZM9.33333 17.1667C5.0071 17.1667 1.5 13.6595 1.5 9.33333H0.5C0.5 14.2118 4.45481 18.1667 9.33333 18.1667V17.1667ZM1.5 9.33333C1.5 5.0071 5.0071 1.5 9.33333 1.5V0.5C4.45481 0.5 0.5 4.45481 0.5 9.33333H1.5ZM9.33333 1.5C13.6595 1.5 17.1667 5.0071 17.1667 9.33333H18.1667C18.1667 4.45481 14.2118 0.5 9.33333 0.5V1.5Z"
                fill="black" />
            </svg>

            <svg onClick={() => setOpenMenu(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 20 20" fill="none">
              <path d="M1 1L19 19" stroke="black" strokeWidth="1.5" />
              <path d="M19 1L1 19" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.searchWrapper}>
        <SearchInput open={openSearch} setHidden={setOpenSearch} />
      </div>

      <div className={styles.bottomContent} style={{ display: !openMenu && 'none' }}>
        <nav className={styles.navList}>
          <div className={styles.listProgram}>
            <div className={styles.wrapperHeader}
                 onClick={() => setOpenProgramLink(!openProgramLink)}
            >
              <div className={styles.link}>Направления обучения</div>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                {
                  openProgramLink ?
                    <path d="M18 11L13.5 16L9 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    :
                    <path d="M9 16L13.5 11L18 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                }
              </svg>
            </div>

            <div className={styles.list}
                 style={{
                   display: !openProgramLink && 'none'
                 }}
            >
              <div className={styles.link}>test</div>
              <div className={styles.link}>test</div>
              <div className={styles.link}>test</div>
              <div className={styles.link}>test</div>
            </div>
          </div>
          {
            MenuAboutInstitute.map((item, index) => (
              <Link className={styles.link} href={item.link} key={index}>{item.text}</Link>
            ))
          }
        </nav>

        <div className={styles.contacts}>
          <div className={styles.text}>Москва, Дербеневская набережная 11</div>
          <div className={styles.text}>+7 (495) 150-99-24</div>
          <div className={styles.text}>вконтакте</div>
          <div className={styles.text}>telegram</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile
