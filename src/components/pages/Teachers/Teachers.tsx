import BlockHelp from '@/components/BlockHelp';
import CardTeacher from '@/components/Items/CardTeacher';
import Faq from '@/components/Sections/FAQ';
import { useAppSelector } from '@/state/hooks';

import styles from './Teachers.module.scss';

export const Teachers = () => {
  const { teacherData } = useAppSelector(state => state.teacherReducer);
  const { faqData } = useAppSelector(state => state.faqReducer);

  return (
    <>
      <section className={'container'}>
        <h1 className={styles.header}>
          НАШИ преподаватели&#160;— <br />
          наставники
        </h1>

        <div className={styles.wrapperCardTeacher}>
          {teacherData.map((teacher, i) => (
            <CardTeacher
              name={teacher.name}
              description={teacher.description}
              imageUrl={teacher.image?.url}
              key={i}
            />
          ))}
        </div>
      </section>
      <section className={'container'}>
        <BlockHelp />
      </section>
      <Faq faqData={faqData} />
    </>
  );
};
