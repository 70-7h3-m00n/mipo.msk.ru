import Link from 'next/link';
import { useState } from 'react';

// import SearchCourse from '@/components/SearchCourse';
import { MenuAboutInstitute } from '@/data/menu';
import { useAppSelector } from '@/state/hooks';
import LogoSvg from '@/SvgComponents/LogoSvg';
import MobileLogoSvg from '@/SvgComponents/MobileLogoSvg';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile = () => {
  const { coursesData } = useAppSelector(state => state.coursesReducer);
  const { facultyData } = useAppSelector(state => state.facultyReducer);

  const [openMenu, setOpenMenu] = useState(false);
  const [openProgramLink, setOpenProgramLink] = useState(false);
  // const [openSearch, setOpenSearch] = useState(false);
  const [validFilter] = useState(onDataMap());

  function onDataMap() {
    return [
      ...new Set(
        coursesData?.map(item => ({
          faculty: {
            title: item.faculty.title,
          },
          typeProgram: {
            title: item.typeProgram.title,
          },
        }))
      ),
    ];
  }

  return (
    <div className={styles.header}>
      <div className={styles.topContent}>
        <Link href={'/'} passHref>
          <div className={styles.wrapperLogo}>
            <LogoSvg />
          </div>

          <div className={styles.wrapperLogoMobile}>
            <MobileLogoSvg />
          </div>
        </Link>

        <div className={styles.burgerWrapper}>
          <svg
            style={{ display: openMenu ? 'none' : 'flex' }}
            onClick={() => setOpenMenu(true)}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="12" fill="#3F3BFF" />
            <rect x="10" y="19" width="40" height="4" rx="2" fill="white" />
            <rect x="10" y="28" width="40" height="4" rx="2" fill="white" />
            <rect x="10" y="37" width="40" height="4" rx="2" fill="white" />
          </svg>

          <div
            className={styles.wrapperSvg}
            style={{ display: !openMenu ? 'none' : 'flex' }}
          >
            {/*<svg onClick={() => setOpenSearch(true)} xmlns="http://www.w3.org/2000/svg" width="22" height="22"*/}
            {/*     viewBox="0 0 22 22" fill="none">*/}
            {/*  <path*/}
            {/*    d="M15.5818 14.8702C15.3866 14.6749 15.07 14.6748 14.8747 14.87C14.6794 15.0652 14.6792 15.3817 14.8744 15.5771L15.5818 14.8702ZM20.6463 21.3534L20.9997 21.7071L21.7071 21.0003L21.3537 20.6466L20.6463 21.3534ZM14.8744 15.5771L20.6463 21.3534L21.3537 20.6466L15.5818 14.8702L14.8744 15.5771ZM17.1667 9.33333C17.1667 13.6595 13.6595 17.1667 9.33333 17.1667V18.1667C14.2118 18.1667 18.1667 14.2118 18.1667 9.33333H17.1667ZM9.33333 17.1667C5.0071 17.1667 1.5 13.6595 1.5 9.33333H0.5C0.5 14.2118 4.45481 18.1667 9.33333 18.1667V17.1667ZM1.5 9.33333C1.5 5.0071 5.0071 1.5 9.33333 1.5V0.5C4.45481 0.5 0.5 4.45481 0.5 9.33333H1.5ZM9.33333 1.5C13.6595 1.5 17.1667 5.0071 17.1667 9.33333H18.1667C18.1667 4.45481 14.2118 0.5 9.33333 0.5V1.5Z"*/}
            {/*    fill="black" />*/}
            {/*</svg>*/}

            <svg
              onClick={() => setOpenMenu(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M1 1L19 19" stroke="black" strokeWidth="1.5" />
              <path d="M19 1L1 19" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/*<div className={styles.searchWrapper}>*/}
      {/*  <SearchCourse open={openSearch} setHidden={setOpenSearch} />*/}
      {/*</div>*/}

      <div
        className={styles.bottomContent}
        style={{ display: !openMenu ? 'none' : '' }}
      >
        <nav className={styles.navList}>
          <div className={styles.listProgram}>
            <div
              className={styles.wrapperHeader}
              onClick={() => setOpenProgramLink(!openProgramLink)}
            >
              <div className={styles.linkHeader}>Направления обучения</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                {openProgramLink ? (
                  <path
                    d="M18 11L13.5 16L9 11"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M9 16L13.5 11L18 16"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>

            <div
              className={styles.list}
              style={{
                display: !openProgramLink ? 'none' : '',
              }}
            >
              <Link href={'/catalog'} className={styles.link}>
                ВСЕ НАПРАВЛЕНИЯ
              </Link>
              {facultyData
                ?.filter(item =>
                  validFilter?.some(elem => item.title === elem.faculty.title)
                )
                ?.map((item, index) => (
                  <Link
                    href={'/catalog/' + item.slug}
                    key={index}
                    className={styles.link}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
          {MenuAboutInstitute.map((item, index) => (
            <Link className={styles.linkHeader} href={item.link} key={index}>
              {item.text}
            </Link>
          ))}
        </nav>

        <div className={styles.contacts}>
          <div className={styles.text}>Москва, Дербеневская набережная 11</div>
          <div className={styles.text}>+7 (495) 150-99-24</div>
          <div className={styles.text}>вконтакте</div>
          <div className={styles.text}>telegram</div>
        </div>
      </div>
    </div>
  );
};
