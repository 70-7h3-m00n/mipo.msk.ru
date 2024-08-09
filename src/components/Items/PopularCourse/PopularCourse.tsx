import Image from 'next/image';
import { useState } from 'react';

import styles from './PopularCourse.module.scss';

type Props = {
  title: string;
  image: string;
  isFaculty: string;
  setIsFaculty(isFaculty: string): void;
  setOpenPopUp(openPopUp: boolean): void;
};

export const PopularCourse = ({
  title,
  image,
  setIsFaculty,
  isFaculty,
  setOpenPopUp,
}: Props) => {
  const [hoverSvg, setHoverSvg] = useState(false);

  const isOpen = () => {
    setIsFaculty(title);
    setOpenPopUp(true);
  };

  const isActive = isFaculty === title || hoverSvg;

  return (
    <div
      className={styles.card}
      onMouseMove={() => setHoverSvg(true)}
      onMouseLeave={() => setHoverSvg(false)}
    >
      <div className={styles.wrapperHeader}>
        <div className={styles.header}>{title}</div>

        <div className={styles.linkCourse} onClick={isOpen}>
          {!isActive && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" rx="10" fill="#F1F1F9" />
              <path
                d="M35.2858 28.9985L33.0552 29.0137L33.0704 17.0718L21.1285 17.0869L21.1437 14.8564L35.2858 14.8564L35.2858 28.9985Z"
                fill="black"
              />
              <path
                d="M33.4558 16.6863L15.0711 35.0711"
                stroke="black"
                strokeWidth="2.3"
              />
            </svg>
          )}

          {isActive && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" rx="10" fill="#3F3BFF" />
              <path
                d="M29.4723 34.9636L27.8843 33.3971L36.3392 24.9636L27.8843 16.5301L29.4723 14.9636L39.4723 24.9636L29.4723 34.9636Z"
                fill="white"
              />
              <path
                d="M36.8843 24.9636L10.8843 24.9636"
                stroke="white"
                strokeWidth="2.3"
              />
            </svg>
          )}
        </div>
      </div>

      <Image
        className={styles.wrapperImage}
        width={290}
        height={210}
        src={image}
        alt={'image'}
        loading="eager"
        draggable={false}
      />
    </div>
  );
};
