import { useState } from 'react';

import ApplicationsContent from '@/components/ApplicationsContent';
import ButtonLink from '@/components/ButtonLink';
import Modal from '@/components/Modal';
import { useAppSelector } from '@/state/hooks';
import CourseImageSvg from '@/SvgComponents/CourseImageSvg';

import styles from './GeneralCourse.module.scss';

export const GeneralCourse = () => {
  const { courseData } = useAppSelector(state => state.courseReducer);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <section className={'container'}>
      <div className={styles.wrapperHeaderBlock}>
        <div className={styles.wrapperHeader}>
          <div className={styles.typeProgram}>
            {courseData?.typeProgram.title}
          </div>

          <h1 className={styles.header}>{courseData?.title}</h1>

          <p className={styles.description}>{courseData?.description}</p>

          <div className={styles.wrapperBtn}>
            <ButtonLink
              text={'Направления'}
              hrefLink={'/catalog'}
              active
              styleOption={'square'}
            />

            <ButtonLink
              text={'Задать вопрос'}
              onClick={() => setOpenPopUp(true)}
              styleOption={'square'}
              className={styles.btn}
            />
          </div>
        </div>

        <div className={styles.wrapperImage}>
          <CourseImageSvg
            className={styles.image}
            href={courseData!.image.url!}
          />
        </div>
      </div>

      <div className={styles.wrapperSpecifications}>
        <div className={styles.itemSpecifications}>
          <h3 className={styles.headerSpecifications}>
            Длительность обучения —{' '}
          </h3>
          <h4 className={styles.subHeaderSpecifications}>
            {courseData?.monthsTraining} месяцев
          </h4>
        </div>

        <div className={styles.itemSpecifications}>
          <h3 className={styles.headerSpecifications}>Формат обучения — </h3>
          <h4 className={styles.subHeaderSpecifications}>
            онлайн, в любое удобное время
          </h4>
        </div>

        <div className={styles.itemSpecifications}>
          <h3 className={styles.headerSpecifications}>
            Ближайшее зачисление —{' '}
          </h3>
          <h4 className={styles.subHeaderSpecifications}>24 мая</h4>
        </div>

        <div className={styles.itemSpecifications}>
          <h3 className={styles.headerSpecifications}>
            Документ об образовании—{' '}
          </h3>
          <h4 className={styles.subHeaderSpecifications}>Диплом</h4>
        </div>
      </div>

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'появились сложности?'} />
      </Modal>
    </section>
  );
};
