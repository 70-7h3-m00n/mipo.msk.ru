import stls from '@/styles/components/icons/IconPaperScroll.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const IconPaperScroll = () => {
  const { program } = useContext(ProgramContext)
  const atMba =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div className={cn(stls.container, { [stls.atMba]: atMba })}>
      <svg viewBox='0 0 19 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13.75 7.76L16.23 6.38C18.28 3.16 15.85 0 13 0C12.36 0 11.7 0.14 11.06 0.5L2.06 5.5C0.72 6.24 0 7.61 0 9C0 9.96 0.34 10.94 1.07 11.72L2.37 13.12L7.08 18.22C7.61 18.79 8 19.15 8 20C8 20.75 7.58 21.42 6.97 21.75C4.93 22.88 2.92 20.15 4.66 18.55L3.3 17.08C0.49 19.67 2.67 24 6 24C6.61 24 7.27 23.83 7.94 23.5L16.93 18.5C18.21 17.79 19 16.45 19 15C19 12.98 18.06 12.42 13.75 7.76ZM13 2C14.47 2 15.45 3.54 14.79 4.89L7.99 8.67C7.88 7.35 7.13 6.21 6.06 5.57C12.16 2.18 12.19 2 13 2ZM10 20.06C10.02 18.01 9.19 17.55 4.75 12.75L4.29 12.25C2.48 10.3 2 10 2 9C2 7.87 2.93 7 4 7C5.56 7 6.54 8.73 5.68 10.09L5.4 10.52L6.55 11.76L11.95 8.76C18.99 16.37 19.17 14.96 10 20.06Z'
          fill='#3290FF'
        />
      </svg>
    </div>
  )
}

export default IconPaperScroll
