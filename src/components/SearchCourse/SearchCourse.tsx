import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import styles from './SearchCourse.module.scss';

type Props = {
  open: boolean;
  setHidden(open: boolean): void;
};

export const SearchCourse = ({ open, setHidden }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const closeModal = () => {
    setHidden(false);
    setInputValue('');
  };

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div className={open ? styles.block : 'hidden'}>
      <div onClick={closeModal} className={styles.wrapperClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M1 1L19 19" stroke="black" strokeWidth="1.5" />
          <path d="M19 1L1 19" stroke="black" strokeWidth="1.5" />
        </svg>
      </div>
      <div className={styles.wrapperTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M15.5818 14.8702C15.3866 14.6749 15.07 14.6748 14.8747 14.87C14.6794 15.0652 14.6792 15.3817 14.8744 15.5771L15.5818 14.8702ZM20.6463 21.3534L20.9997 21.7071L21.7071 21.0003L21.3537 20.6466L20.6463 21.3534ZM14.8744 15.5771L20.6463 21.3534L21.3537 20.6466L15.5818 14.8702L14.8744 15.5771ZM17.1667 9.33333C17.1667 13.6595 13.6595 17.1667 9.33333 17.1667V18.1667C14.2118 18.1667 18.1667 14.2118 18.1667 9.33333H17.1667ZM9.33333 17.1667C5.0071 17.1667 1.5 13.6595 1.5 9.33333H0.5C0.5 14.2118 4.45481 18.1667 9.33333 18.1667V17.1667ZM1.5 9.33333C1.5 5.0071 5.0071 1.5 9.33333 1.5V0.5C4.45481 0.5 0.5 4.45481 0.5 9.33333H1.5ZM9.33333 1.5C13.6595 1.5 17.1667 5.0071 17.1667 9.33333H18.1667C18.1667 4.45481 14.2118 0.5 9.33333 0.5V1.5Z"
            fill="black"
          />
        </svg>

        <input
          onChange={e => handleChange(e)}
          value={inputValue}
          ref={inputRef}
          type={'text'}
        />
      </div>

      <div className={styles.wrapperBottom}>
        <h3 className={styles.header}>популярные запросы</h3>

        <div className={styles.list}>
          <div className={styles.item}>психолог</div>
        </div>
      </div>
    </div>
  );
};
