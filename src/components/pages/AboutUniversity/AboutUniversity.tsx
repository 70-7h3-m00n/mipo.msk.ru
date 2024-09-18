import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import imgDoc from '@/assets/image/doc.png';
import ApplicationsContent from '@/components/ApplicationsContent';
import BlockHelp from '@/components/BlockHelp';
import CardDescription from '@/components/Items/CardDescription';
import Modal from '@/components/Modal';
import Directions from '@/components/Sections/Directions';
import Faq from '@/components/Sections/FAQ';
import SliderTeachers from '@/components/SliderTeachers';
import { aboutUniversityIfo } from '@/data/aboutUniversity';
import { useAppSelector } from '@/state/hooks';
import IncreaseSvg from '@/SvgComponents/IncreaseSvg';

import styles from './AboutUniversity.module.scss';

export const AboutUniversity = () => {
  const { teacherData } = useAppSelector(state => state.teacherReducer);
  const { faqData } = useAppSelector(state => state.faqReducer);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [openPopUpDoc, setOpenPopUpDoc] = useState(false);

  return (
    <>
      <section className={'container'}>
        <h1 className={styles.header}>
          <span>МОСКОВСКИЙ ИНСТИТУТ</span>
          <br /> ПРОФЕССИОНАЛЬНОГО
          <br /> ОБРАЗОВАНИЯ
        </h1>

        <p className={styles.text}>
          Наш институт нацелен на предоставление самых актуальных знаний,
          которые будут полезны как практикующим специалистам, так и тем, кто
          делает первые шаги в профессии. Для этого мы приглашаем
          преподавателей-практиков, которые являются настоящими экспертами в
          своей области.
        </p>

        <div className={styles.wrapperCard}>
          {aboutUniversityIfo.map((item, index) => (
            <CardDescription
              header={item.header}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </section>

      <Directions />

      <section className={classNames('container', styles.wrapperLicense)}>
        <div className={styles.blockLicense}>
          <h2
            className={classNames('header', styles.headerLicense)}
            style={{ margin: 0 }}
          >
            Лицензия на <br />
            осуществление <br />
            образовательной <br />
            деятельности
          </h2>

          <p className={styles.text}>
            Срок действия: бессрочная
            <br />
            Регистрационный номер лицензии: № Л035-01298-77/00179971
            <br />
            Дата предоставления лицензии: 29 декабря 2021 г.
          </p>

          <h3 className={styles.subHeader}>
            Информация о лицензии в сводном реестре лицензий:
          </h3>

          <button
            onClick={() => setOpenPopUp(!openPopUp)}
            className={styles.btnLicense}
          >
            проверить
          </button>
        </div>

        <div className={styles.blockDoc}>
          <Image className={styles.imgDoc} src={imgDoc} alt={'img'} />
          <div
            className={styles.wrapperSvg}
            onClick={() => setOpenPopUpDoc(true)}
          >
            <IncreaseSvg />
          </div>
        </div>
      </section>

      <section className={'container'}>
        <SliderTeachers list={teacherData} />

        <BlockHelp />
      </section>

      <Faq faqData={faqData} />

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'появились сложности?'} />
      </Modal>

      <Modal open={openPopUpDoc} setHidden={setOpenPopUpDoc}>
        <Image className={styles.imageDocPopUp} src={imgDoc} alt={'img'} />
      </Modal>
    </>
  );
};
