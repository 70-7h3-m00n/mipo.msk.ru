import styles from './Select.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import ArrowSvg from '../../SvgComponents/ArrowSvg'

interface IProps {
  value: string
  subHeader: string
  headerSelect: string
  children: ReactNode
}

export const Select = ({ value, subHeader, headerSelect, children }: IProps) => {
  const [open, setOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className={styles.select}>
      <div onClick={() => setOpen(!open)} className={styles.wrapperHeader}>
        {
          value ?
            <div className={styles.subHeader}>
              {subHeader}
            </div>
            :
            <></>
        }
        <div className={styles.headerSelect}>{value ? value : headerSelect}</div>

        <div className={styles.wrapperArrow}>
          <ArrowSvg position={open} color={'white'} />
        </div>
      </div>

      <div className={styles.listOption}
           style={{
             display: open ? 'flex' : 'none',
           }}
      >
        {children}
      </div>
    </div>

  )
}
