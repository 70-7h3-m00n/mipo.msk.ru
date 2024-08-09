import classNames from 'classnames';

import ContentDiplomaEducation from '@/components/ContentDiplomaEducation';
import CardCounter from '@/components/Items/CardCounter';
import CourseModule from '@/components/Sections/CourseModule';
import Faq from '@/components/Sections/FAQ';
import GeneralCourse from '@/components/Sections/GeneralCourse';
import LearningProfessions from '@/components/Sections/LearningProfessions';
import Portfolio from '@/components/Sections/Portfolio';
import { SignUpProgram } from '@/components/Sections/SignUpProgram/SignUpProgram';
import StudentReviews from '@/components/Sections/StudentReviews';
import YouWillLearn from '@/components/Sections/YouWillLearn';
import SliderTeachers from '@/components/SliderTeachers';
import { useAppSelector } from '@/state/hooks';

import styles from './ProgramCourse.module.scss';

export const ProgramCourse = () => {
  const { courseData } = useAppSelector(state => state.courseReducer);

  return (
    <>
      <GeneralCourse />

      <LearningProfessions />

      {courseData?.courseFor ? (
        <section className={'container'}>
          <h2 className={'header'}>для кого курс</h2>

          <div className={styles.listCourseFor}>
            {courseData.courseFor.map(item => (
              <div className={styles.cardCourseFor} key={item.id}>
                <h4 className={styles.headerCourseFor}>{item.header}</h4>

                <p className={styles.descriptionCourseFor}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <></>
      )}

      <YouWillLearn />

      {courseData?.undergoingTraining ? (
        <section id={'learningProcess'} className={'container'}>
          <div className={styles.wrapperHeaderTraining}>
            <h2 className={classNames('header', styles.headerTraining)}>
              как проходит обучение
            </h2>

            <p className={styles.descrTraining}>
              Обучение осуществляется по заочной форм с применением
              дистанционных технологий. Лекции, общение, тестирование проходят в
              онлайн формате через образовательную платформу
            </p>
          </div>

          <div className={styles.listItemCounter}>
            {courseData.undergoingTraining.map((item, i) => (
              <CardCounter
                active={false}
                count={i + 1}
                title={item.item}
                key={item.id}
              />
            ))}
          </div>

          <ContentDiplomaEducation />
        </section>
      ) : (
        <></>
      )}

      <CourseModule />

      {courseData?.mentors.length ? (
        <section id={'teachers'} className={'container'}>
          <SliderTeachers list={courseData.mentors} />
        </section>
      ) : (
        <></>
      )}

      {courseData?.portfolio ? (
        <Portfolio
          courseName={courseData.title}
          portfolio={courseData.portfolio}
        />
      ) : (
        <></>
      )}

      <SignUpProgram />

      {courseData?.studentComment.length ? (
        <StudentReviews studentCommentData={courseData.studentComment} />
      ) : (
        <></>
      )}

      {courseData?.faq.length ? <Faq faqData={courseData.faq} /> : <></>}
    </>
  );
};
