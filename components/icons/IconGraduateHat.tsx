import stls from '@/styles/components/icons/IconGraduateHat.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const IconGraduateHat = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <svg viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M24 7L12 0L0 7L4 9.33V13.27L4.14 13.5C5.77 16.28 8.78 18 12 18C13.41 18 14.77 17.65 16 17.05V14.75C14.83 15.54 13.45 16 12 16C9.58 16 7.3 14.75 6 12.72V10.5L12 14L15.43 12L13.47 10.83L12 11.68L3.97 7L12 2.32L20.03 7L17.42 8.52L12.68 5.7L10.91 6.9L10.88 6.96L18 11.2V21H20V10.06L19.38 9.69L24 7Z'
          fill='#3290FF'
        />
      </svg>
    </div>
  )
}

export default IconGraduateHat
