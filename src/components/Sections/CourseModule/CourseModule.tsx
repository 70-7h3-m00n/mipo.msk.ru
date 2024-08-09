import classNames from 'classnames';
import { useState } from 'react';

import ApplicationsContent from '@/components/ApplicationsContent';
import { BannerQuestionProgram } from '@/components/BannerQuestionProgram/BannerQuestionProgram';
import ButtonLink from '@/components/ButtonLink';
import { CardModuleCourse } from '@/components/Items/CardModuleCourse/CardModuleCourse';
import Modal from '@/components/Modal';
import { useAppSelector } from '@/state/hooks';

import styles from './ProgramCourseModule.module.scss';

export const CourseModule = () => {
  const { courseData } = useAppSelector(state => state.courseReducer);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [counter, setCounter] = useState(4);

  const onToggle = () => {
    if (counter === 4) {
      setCounter(courseData!.courseProgram.length);
    } else {
      setCounter(4);
    }
  };

  return (
    <section id={'curriculum'} className={'container'}>
      <h2 className={classNames('header', styles.header)}>программа курса</h2>

      <p className={styles.description}>{courseData?.descriptionModule}</p>

      <div className={styles.listModule}>
        {courseData?.courseProgram
          .filter((_, index) => index + 1 <= counter)
          .map((item, index) => (
            <CardModuleCourse
              list={item.listThemes.slice(0, 5)}
              lessons={item.numberLessons}
              title={item.titleModule}
              key={index}
            />
          ))}
      </div>

      <div className={styles.wrapperBtn}>
        <ButtonLink
          text={counter === 4 ? 'смотреть всю программу' : 'Скрыть'}
          onClick={onToggle}
          active
          styleOption={'square'}
          className={styles.btn}
        />
      </div>

      <BannerQuestionProgram setOpenPopUp={setOpenPopUp} />

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <ApplicationsContent title={'Появились сложности?'} />
      </Modal>
    </section>
  );
};
