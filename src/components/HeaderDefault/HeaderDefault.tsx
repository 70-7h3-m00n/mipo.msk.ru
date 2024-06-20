import styles from './HeaderDefault.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { MenuAboutInstitute } from '../../data/menu'
import { useRouter } from 'next/router'
import SearchCourse from '../SearchCourse'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/state/hooks'
import LogoSvg from '../../SvgComponents/LogoSvg'
import classnames from 'classnames'

const HeaderMobile = dynamic(() => import('../HeaderMobile'), { ssr: false })

export const HeaderDefault = () => {
  const { coursesData } = useAppSelector(state => state.coursesReducer)
  const { facultyData } = useAppSelector(state => state.facultyReducer)
  const router = useRouter()
  const [openDirection, setOpenDirection] = useState(false)
  const [openAboutInstitute, setOpenAboutInstitute] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [validFilter, setValidFilter] = useState(onDataMap())

  function onDataMap() {
    return [...new Set(
      coursesData?.map(item => ({
        faculty: {
          title: item.faculty.title,
        },
        typeProgram: {
          title: item.typeProgram.title,
        },
      }))
    )]
  }

  const toggleDirection = () => {
    setOpenDirection(!openDirection)
    setOpenAboutInstitute(false)
  }

  const toggleAboutInstitute = () => {
    setOpenAboutInstitute(!openAboutInstitute)
    setOpenDirection(false)
  }

  const onClose = () => {
    setOpenDirection(false)
    setOpenAboutInstitute(false)
  }

  return (
    <header className={styles.wrapperRelative}
            onMouseLeave={onClose}
    >
      <div className={ classNames('container', styles.wrapperHeader)}>
        <div className={styles.header}>
          <div className={styles.menu}>
            <div className={styles.blockLeft}>
              <Link href={'/'} passHref>
                <LogoSvg />
              </Link>

              <button className={classNames(openDirection ? styles.activeDirection : styles.btnDirection, styles.text)}
                      onClick={toggleDirection}
              >
                <div>Направления обучения</div>

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  {
                    openDirection ?
                      <path d="M5 12L9.5 7L14 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      :
                      <path d="M14 7L9.5 12L5 7" stroke="#3F3BFF" strokeLinecap="round" strokeLinejoin="round" />
                  }
                </svg>
              </button>
            </div>

            <div className={styles.blockMid}>
              <button
                className={classNames(openAboutInstitute ? styles.activeLink : styles.btnAboutInstitute, styles.text)}
                onClick={toggleAboutInstitute}>
                <div>об институте</div>

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  {
                    openAboutInstitute ?
                      <path d="M5 12L9.5 7L14 12" stroke="rgba(0, 0, 0, 0.50)" strokeLinecap="round"
                            strokeLinejoin="round" />
                      :
                      <path d="M14 7L9.5 12L5 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  }
                </svg>
              </button>

              <Link className={classNames(router.asPath === '/webinars' ? styles.activeLink : styles.text,
                styles.btnAboutInstitute
              )}
                    href={'/webinars'}
                    onClick={onClose}
              >
                Вебинары
              </Link>

              <Link className={classnames(router.asPath === '/contact' ? styles.activeLink : styles.text,
                styles.btnAboutInstitute
              )}
                    href={'/contact'}
                    onClick={onClose}
              >
                контакты
              </Link>
            </div>

            <div className={styles.blockRight}>
              {/*<button onClick={() => {*/}
              {/*  setOpenSearch(!openSearch)*/}
              {/*  onClose()*/}
              {/*}}*/}
              {/*        className={classNames(styles.btnSearch, styles.text)}*/}
              {/*>*/}
              {/*  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 22 22" fill="none">*/}
              {/*    <path*/}
              {/*      d="M15.2281 15.2237L21 21M17.6667 9.33333C17.6667 13.9357 13.9357 17.6667 9.33333 17.6667C4.73096 17.6667 1 13.9357 1 9.33333C1 4.73096 4.73096 1 9.33333 1C13.9357 1 17.6667 4.73096 17.6667 9.33333Z"*/}
              {/*      stroke="black" strokeLinecap="square" strokeLinejoin="round" />*/}
              {/*  </svg>*/}

              {/*  <div>Поиск</div>*/}
              {/*</button>*/}

              <Link className={styles.text} href={'/'}>
                ВОЙТИ
              </Link>
            </div>
          </div>

          <div className={openDirection || openAboutInstitute ? styles.content : 'hidden'}>
            <div className={styles.linksContent}>
              <div className={openDirection ? styles.contentDirection : 'hidden'}>
                <Link className={styles.link} href={'/catalog'}>ВСЕ НАПРАВЛЕНИЯ</Link>
                {
                  facultyData?.filter(item => validFilter
                    ?.some(elem => item.title === elem.faculty.title))
                    ?.map((item, index) => (
                      <Link key={index} className={styles.link} href={'/catalog/' + item.slug}>{item.title}</Link>
                    ))
                }
              </div>

              <div className={openAboutInstitute ? styles.contentAboutInstitute : 'hidden'}>
                {
                  MenuAboutInstitute.map((item, index) => (
                    <Link key={index} className={styles.linkAboutInstitute} href={item.link}>{item.text}</Link>
                  ))
                }
              </div>
            </div>

            <div className={styles.contacts}>
              <div className={styles.text}>
                Москва, Дербеневская набережная 11
              </div>

              <div className={styles.messenger}>
                <div className={styles.text}>+7 (495) 150-99-24</div>
                <div className={styles.text}>вконтакте</div>
                <div className={styles.text}>telegram</div>
              </div>
            </div>
          </div>

          {/*<div className={styles.searchWrapper}>*/}
          {/*  <SearchCourse open={openSearch} setHidden={setOpenSearch} />*/}
          {/*</div>*/}
        </div>

        <HeaderMobile />
      </div>
    </header>
  )
}
