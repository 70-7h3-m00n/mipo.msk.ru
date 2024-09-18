import styles from './CardTitle.module.scss';

type CardTitleProps = {
  title: string;
};

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div className={styles.cardTitle}>
      <h2 className={styles.header}>{title}</h2>
    </div>
  );
};
