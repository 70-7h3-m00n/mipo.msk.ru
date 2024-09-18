import Link from 'next/link';

import { estimationData } from '@/data/estimation';

import styles from './EstimationPopUp.module.scss';

export const EstimationPopUp = () => {
  return (
    <div className={styles.estimationPopUp}>
      {estimationData.map((item, index) => (
        <Link
          target={'_blank'}
          className={styles.item}
          href={item.href}
          key={index}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
