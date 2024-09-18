import Image from 'next/image';

import styles from './ReviewCard.module.scss';

type ReviewCardProps = {
  url: string;
  name: string;
  data: string;
  description: string;
};

export const ReviewCard = ({
  url,
  name,
  description,
  data,
}: ReviewCardProps) => {
  return (
    <div className={styles.itemComment}>
      <div className={styles.wrapperHeader}>
        <Image
          className={styles.wrapperImage}
          width={80}
          height={80}
          src={url}
          alt={'icon'}
        />

        <div className={styles.wrapperAuthor}>
          <div className={styles.name}>{name}</div>

          <div className={styles.data}>{data}</div>
        </div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};
