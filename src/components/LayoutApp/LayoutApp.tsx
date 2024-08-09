import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import { HeaderApp } from '@/components/HeaderApp/HeaderApp';

import styles from './LayoutApp.module.scss';

type LayoutAppProps = {
  children: ReactNode;
};

export const LayoutApp = ({ children }: LayoutAppProps) => {
  return (
    <>
      <HeaderApp />

      <div className={styles.layoutApp}>{children}</div>

      <Footer />
    </>
  );
};
