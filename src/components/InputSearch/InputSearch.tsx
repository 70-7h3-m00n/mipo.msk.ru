import classnames from 'classnames';
import { useEffect } from 'react';

import MagnifierSvg from '@/SvgComponents/MagnifierSvg';

import styles from './InputSearch.module.scss';

type InputSearchProps = {
  classNames?: string;
  open: boolean;
  setOpen(open: boolean): void;
};

export const InputSearch = ({
  classNames,
  open,
  setOpen,
}: InputSearchProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setOpen(false);
      }
    };

    const show = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', show);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', show);
    };
  }, [setOpen]);

  return (
    <>
      {open ? (
        <div
          className={classnames(styles.inputSearch, classNames)}
          onClick={e => e.stopPropagation()}
        >
          <MagnifierSvg />

          <input className={styles.input} placeholder={'Поиск ПРОГРАММЫ'} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
