import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { IProgramCourses } from '@/api/fetchProgramCourses/types';
import ApplicationsContent from '@/components/ApplicationsContent';
import BlockHelp from '@/components/BlockHelp';
import ButtonLink from '@/components/ButtonLink';
import InputSearch from '@/components/InputSearch';
import CardWebinars from '@/components/Items/CardWebinars';
import Modal from '@/components/Modal';
import Faq from '@/components/Sections/FAQ';
import { useAppSelector } from '@/state/hooks';

import styles from './Webinars.module.scss';

type DataPath = {
  slug: string;
  title: string;
};

export const Webinars = () => {
  const router = useRouter();
  const { faqData } = useAppSelector(state => state.faqReducer);
  const { facultyData } = useAppSelector(state => state.facultyReducer);
  const { webinarsData } = useAppSelector(state => state.webinarsData);

  const [openPopUp, setOpenPopUp] = useState(false);

  const onDataPath = () => {
    const facultyMap = Object.fromEntries(
      facultyData?.map(f => [f.title, f.slug])
    );

    return (webinarsData as Array<IProgramCourses>).reduce(
      (acc: Array<DataPath>, item) => {
        if (!acc.some(entry => entry.title === item.faculty.title)) {
          acc.push({
            slug: facultyMap[item.faculty.title],
            title: item.faculty.title,
          });
        }
        return acc;
      },
      []
    );
  };

  const filterWebinar = (title: string) => {
    const filter = onDataPath().filter(
      item => item.slug === router.asPath.split('/').pop()
    );

    if (filter[0]?.title) {
      return title === filter[0].title;
    }
    return true;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    router.push(selectedValue);
  };

  return (
    <>
      <section className={'container'}>
        <div className={styles.wrapperGeneral}>
          <h1 className={styles.header}>Вебинары</h1>

          <InputSearch
            classNames={styles.search}
            setOpen={() => {}}
            open={true}
          />
        </div>

        <div className={styles.wrapperFilter}>
          <ButtonLink
            text={'все направления'}
            styleOption={'round'}
            active={router.asPath === '/webinars'}
            hrefLink={`/webinars`}
          />
          {onDataPath().map((item, index) => (
            <ButtonLink
              text={item.title}
              styleOption={'round'}
              active={router.asPath.includes(item.slug!)}
              hrefLink={`/webinars/${item.slug}`}
              key={index}
            />
          ))}
        </div>

        <div className={styles.wrapperSelectFilter}>
          <select
            className={styles.select}
            name="filter"
            onChange={handleChange}
            value={router.asPath}
          >
            <option className={styles.selectOptions} value="/webinars">
              все направления
            </option>
            {onDataPath().map(item => (
              <option
                className={styles.selectOptions}
                key={item.slug}
                value={`/webinars/${item.slug}`}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.wrapperCardWebinars}>
          {webinarsData
            .filter(item => filterWebinar(item.faculty.title))
            .map((item, index) => (
              <CardWebinars
                title={item.title}
                data={item.dataPlay}
                speaker={item.speaker}
                key={index}
                setOpenPopUp={setOpenPopUp}
              />
            ))}
        </div>

        <Modal open={openPopUp} setHidden={setOpenPopUp}>
          <ApplicationsContent title={'Записаться на вебинар?'} />
        </Modal>
      </section>

      <section className={'container'}>
        <BlockHelp />
      </section>

      <Faq faqData={faqData} />
    </>
  );
};
