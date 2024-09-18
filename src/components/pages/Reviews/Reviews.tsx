import BlockHelp from '@/components/BlockHelp';
import CardDescription from '@/components/Items/CardDescription';
import ReviewCard from '@/components/Items/ReviewCard';
import Faq from '@/components/Sections/FAQ';
import { reviewsInfoData } from '@/data/reviews';
import { useAppSelector } from '@/state/hooks';

import styles from './Reviews.module.scss';

export const Reviews = () => {
  const { faqData } = useAppSelector(state => state.faqReducer);
  const { studentCommentData } = useAppSelector(
    state => state.studentCommentReducer
  );

  return (
    <>
      <section className={'container'}>
        <div className={styles.generalWrapperBlock}>
          <h1 className={styles.header}>
            Отзывы студентов <br />и выпускников
          </h1>

          <p className={styles.description}>
            Нам важно, чтобы вы приняли взвешенное решение об обучение на
            платформе. поэтому мы собрали для вас честные мнения, чтобы вы
            приняли осознанное решение, подойдем ли мы друг другу.
          </p>
        </div>

        <div className={styles.wrapperCard}>
          {reviewsInfoData.map((item, index) => (
            <CardDescription
              header={item.title}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className={'container'}>
        <div className={styles.wrapperReviewCard}>
          {studentCommentData.map((item, index) => (
            <ReviewCard
              url={item.image.url}
              name={item.name}
              description={item.description}
              data={item.data}
              key={index}
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
