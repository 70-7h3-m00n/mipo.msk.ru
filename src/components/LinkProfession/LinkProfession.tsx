import Link from 'next/link';

import styles from './LinkProfession.module.scss';

type Props = {
  text: string;
  href: string;
};

export const LinkProfession = ({ text, href }: Props) => {
  return (
    <Link href={href} className={styles.block} passHref>
      <div>{text}</div>
      <div className={styles.wrapperSvg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="21"
          viewBox="0 0 12 21"
          fill="none"
        >
          <path d="M2.00009 20.5L0.412109 18.9335L8.86705 10.5L0.412109 2.06652L2.00009 0.5L12.0001 10.5L2.00009 20.5Z" />
        </svg>
      </div>
    </Link>
  );
};
