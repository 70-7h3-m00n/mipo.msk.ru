import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';

import type { fetchProgramCourses } from '@/api/fetchProgramCourses';
import type { fetchTypeProgram } from '@/api/fetchTypeProgram';
import ApplicationsContent from '@/components/ApplicationsContent';
import ButtonLink from '@/components/ButtonLink';
import { InputSearch } from '@/components/InputSearch/InputSearch';
import CardCourse from '@/components/Items/CardCourse';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import SelectOption from '@/components/SelectOption';
import { useAppSelector } from '@/state/hooks';
import ArrowSvg from '@/SvgComponents/ArrowSvg';
import DoubleSwitchSvg from '@/SvgComponents/DoubleSwitchSvg';
import MagnifierSvg from '@/SvgComponents/MagnifierSvg';

import styles from './Navigation.module.scss';

type IValidFilter = {
  faculty: {
    slug: string | null;
    title: string;
  };
  typeProgram: {
    slug: string | null;
    title: string;
  };
};

export const Navigation = () => {
  const faculty = useAppSelector(state => state.facultyReducer.facultyData);
  const typeProgram = useAppSelector(
    state => state.typeProgramReducer.typeProgramData
  );
  const courses = useAppSelector(state => state.coursesReducer.coursesData);

  const router = useRouter();
  const [searchCourse, setSearchCourse] = useState('');
  const [openTypeProgram, setOpenTypeProgram] = useState(false);
  const [validFilter, setValidFilter] = useState<Array<IValidFilter> | null>(
    null
  );
  const [facultySelect, setFacultySelect] = useState('');
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  const facultyMap = Object.fromEntries(faculty?.map(f => [f.title, f.slug]));
  const typeProgramMap = Object.fromEntries(
    typeProgram?.map(tp => [tp.title, tp.slug])
  );
  const facultySlug = faculty?.map(item => item.slug);
  const typeProgramSlug = typeProgram?.map(item => item.slug);
  const dataPath = router.asPath.split('/').filter(Boolean);
  const lastPathData = dataPath[dataPath.length - 1];

  const onDataMap = useCallback(() => {
    return [
      ...new Set(
        courses?.map(item => ({
          faculty: {
            slug: facultyMap[item.faculty.title] || null,
            title: item.faculty.title,
          },
          typeProgram: {
            slug: typeProgramMap[item.typeProgram.title] || null,
            title: item.typeProgram.title,
          },
        }))
      ),
    ];
  }, [courses, facultyMap, typeProgramMap]);

  const onValidFacultyCourse = (slug: string) => {
    if (facultySlug.includes(lastPathData) && slug === lastPathData) {
      return true;
    }
    if (typeProgramSlug.includes(lastPathData)) {
      return true;
    }
    return lastPathData === 'catalog';
  };

  const routerPath = (index: number) => {
    if (typeof dataPath[index] !== 'undefined') {
      return `${dataPath[index]}`;
    }
    return '';
  };

  const hrefLinkFaculty = (slug: string) => {
    let result = '/catalog';

    if (typeProgramSlug.includes(routerPath(1))) {
      return (result = `/catalog/${routerPath(1)}/${slug}`);
    }
    if (facultySlug.includes(routerPath(1)) || routerPath(1) === '') {
      return (result = `/catalog/${slug}`);
    }
    return result;
  };

  const hrefLinkFacultyAll = () => {
    if (typeProgramSlug.includes(routerPath(1))) {
      return `/catalog/${routerPath(1)}`;
    } else {
      return '/catalog';
    }
  };

  const typeProgramCourse = (): Awaited<
    ReturnType<typeof fetchTypeProgram>
  > => {
    return typeProgram?.filter(
      item =>
        item.slug === routerPath(1) ||
        facultySlug.includes(routerPath(1)) ||
        routerPath(1) === ''
    );
  };

  const filterCourse = (
    title: string
  ): Awaited<ReturnType<typeof fetchProgramCourses>> => {
    return courses
      .filter(courseItem => courseItem.typeProgram.title === title)
      .filter(item => onValidFacultyCourse(facultyMap[item.faculty.title]))
      .filter(item => item.title.includes(searchCourse));
  };

  useEffect(() => {
    const mapData = onDataMap();

    if (dataPath.length === 2) {
      if (!faculty.some(item => item.slug === dataPath[1])) {
        return setValidFilter(
          mapData.filter(item => item.typeProgram.slug === dataPath[1])
        );
      }
    }
    if (dataPath.length === 3) {
      return setValidFilter(
        mapData.filter(item => item.typeProgram.slug === dataPath[1])
      );
    }
    setValidFilter([...onDataMap()]);
  }, [router.asPath]);

  if (!courses.length && !faculty.length && !typeProgram.length) return <></>;

  return (
    <section className={classNames('container', styles.section)}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>
          Направления <br /> обучения
        </h2>

        <div className={styles.searchWrapper}>
          <MagnifierSvg />

          <input
            onChange={e => setSearchCourse(e.target.value)}
            className={styles.search}
            placeholder={'Поиск ПРОГРАММЫ'}
          />
        </div>
      </div>

      <div className={styles.wrapperBtnPrograms}>
        <div className={styles.listBtnProgram}>
          <ButtonLink
            active={
              router.asPath === '/catalog' ||
              typeProgram.some(item => lastPathData.includes(item.slug))
            }
            hrefLink={hrefLinkFacultyAll()}
            text={'Все направления'}
            styleOption={'round'}
          />
          {faculty
            ?.filter(item =>
              validFilter?.some(elem => item.title === elem.faculty.title)
            )
            .map((item, index) => (
              <ButtonLink
                hrefLink={hrefLinkFaculty(item.slug)}
                active={lastPathData.includes(item.slug)}
                text={item.title}
                styleOption={'round'}
                key={index}
              />
            ))}
        </div>

        <div className={styles.mobileBlock}>
          <Select
            headerSelect={'выбрать направление'}
            subHeader={'направление'}
            value={facultySelect}
          >
            {faculty
              ?.filter(item =>
                validFilter?.some(elem => item.title === elem.faculty.title)
              )
              .map((item, index) => (
                <SelectOption
                  onClick={() => setFacultySelect(item.title)}
                  href={hrefLinkFaculty(item.slug)}
                  title={item.title}
                  key={index}
                />
              ))}
          </Select>
        </div>

        <div className={styles.listBtnTypeProgram}>
          <div className={styles.wrapperBtn} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setOpenTypeProgram(!openTypeProgram)}
              className={styles.programBtn}
            >
              <div className={styles.desktopWrapper}>
                <span className={styles.text}>выберите вид программы</span>

                <ArrowSvg position={openTypeProgram} />
              </div>

              <DoubleSwitchSvg className={styles.mobileBlock} />
            </button>

            <button
              className={styles.mobileBlock}
              onClick={() => setOpenSearchMobile(true)}
            >
              <MagnifierSvg />
            </button>

            <InputSearch
              classNames={styles.inputSearchWrapper}
              open={openSearchMobile}
              setOpen={setOpenSearchMobile}
            />
          </div>

          {openTypeProgram ? (
            <div className={styles.filterTypeProgram}>
              <span className={classNames(styles.text, styles.mobileBlock)}>
                выберите вид программы
              </span>
              {typeProgram?.map((item, index) => (
                <div
                  onClick={() =>
                    router.push(`/catalog/${item.slug}`, '', {
                      scroll: false,
                    })
                  }
                  className={styles.typeProgram}
                  key={index}
                >
                  <input
                    type={'checkbox'}
                    className={styles.checkbox}
                    checked={routerPath(1).endsWith(item.slug)}
                    readOnly
                  />

                  <div className={styles.text}>{item.title}</div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.wrapperProgram}>
        {typeProgramCourse().map((typeCourse, i) => (
          <Fragment key={i}>
            {filterCourse(typeCourse.title).length !== 0 ? (
              <div className={styles.wrapperProgramCourse}>
                <h3 className={classNames('header', styles.headerProgram)}>
                  {typeCourse.title}
                </h3>

                <div className={styles.listCourseItem}>
                  {filterCourse(typeCourse.title).map((course, index) => (
                    <CardCourse
                      srcIcon={
                        faculty!.find(
                          elem => elem.title === course.faculty.title
                        )!.icon[0].url
                      }
                      monthsNumber={course.monthsTraining}
                      href={`/catalog/${
                        typeProgramMap[course.typeProgram.title]
                      }/${facultyMap[course.faculty.title]}/${course.slug}`}
                      hoursNumber={course.hoursTraining}
                      discount={course.discount}
                      price={course.price}
                      title={course.title}
                      key={index}
                      setOpenPopUp={setOpenPopUp}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'Записаться на курс?'} />
      </Modal>
    </section>
  );
};
