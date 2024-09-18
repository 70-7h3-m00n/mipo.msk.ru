import styles from './CardDescription.module.scss';

type CardDescriptionProps = {
  header: string;
  description: string;
};

export const CardDescription = ({
  header,
  description,
}: CardDescriptionProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardHeader}>{header}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
