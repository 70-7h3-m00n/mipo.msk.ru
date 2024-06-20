import styles from './InputSearch.module.scss'
import MagnifierSvg from '../../SvgComponents/MagnifierSvg'
import classnames from 'classnames'
import { useEffect } from 'react'

interface InputSearchProps {
  classNames?: string
  open: boolean
  setOpen(open: boolean): void
}

export const InputSearch = ({ classNames, open, setOpen }:InputSearchProps) => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setOpen(false)
    }
  }

  const show = () => {
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', show)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', show)
    };
  }, [])
  
  return (
    <>
      {
        open ?
          <div className={classnames(styles.inputSearch, classNames)}
               onClick={(e) => e.stopPropagation()}
          >
            <MagnifierSvg />

            <input className={styles.input} placeholder={'Поиск ПРОГРАММЫ'} />
          </div> : <></>
      }
    </>
  )
}
