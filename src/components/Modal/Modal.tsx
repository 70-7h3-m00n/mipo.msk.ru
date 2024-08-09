import type { ReactElement } from 'react';
import { useEffect } from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  open: boolean;
  setHidden(open: boolean): void;
  children: ReactElement;
};

export const Modal = ({
  open,
  setHidden,
  children,
}: ModalProps): ReactElement => {
  useEffect(() => {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = `${scrollbar}px`;
    } else {
      document.body.style.overflowY = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [open]);

  return (
    <div
      className={open ? styles.modal : 'hidden'}
      onClick={() => setHidden(false)}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};
