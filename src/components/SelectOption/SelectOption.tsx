import Link from 'next/link';
import type { HTMLAttributes } from 'react';

import styles from './SelectOption.module.scss';

type SelectOptionProps = {
  title: string;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;

export const SelectOption = ({ title, href, ...props }: SelectOptionProps) => {
  return (
    <Link className={styles.option} href={href} {...props}>
      {title}
    </Link>
  );
};
