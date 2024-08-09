import { useState } from 'react';

import styles from './Accordion.module.scss';

type Props = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.block}>
      <div onClick={() => setOpen(!open)} className={styles.wrapperHeader}>
        <div className={styles.header}>{title}</div>

        <div className={styles.wrapperSvg}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M1.59749 20L0 18.4335L8.50554 10L0 1.56652L1.59749 0L11.6573 10L1.59749 20Z"
                fill="black"
              />
              <path
                d="M18.4025 20L20 18.4335L11.4945 10L20 1.56652L18.4025 0L8.34266 10L18.4025 20Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect x="9" width="2" height="20" fill="black" />
              <rect
                y="11"
                width="2"
                height="20"
                transform="rotate(-90 0 11)"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>

      <div className={open ? styles.wrapperDescription : 'hidden'}>
        {description}
      </div>
    </div>
  );
};
