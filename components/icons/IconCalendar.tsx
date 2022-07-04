import stls from '@/styles/components/icons/IconCalendar.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const IconCalendar = ({ theta = false, halfopacity = false }) => {
  const { program } = useContext(ProgramContext)
  const atMba =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div
      className={cn([stls.container], {
        [stls.theta]: theta,
        [stls.halfopacity]: halfopacity,
        [stls.atMba]: atMba
      })}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Срок обучения</title>
        <path
          d='M19.86 9H20V2H15V0H13V5H15V4H18V8.26C17.36 8.1 16.69 8 16 8C11.93 8 8.56 11.06 8.07 15H2V4H3V2H0V17H8.07C8.56 20.94 11.93 24 16 24C20.41 24 24 20.41 24 16C24 12.99 22.33 10.37 19.86 9ZM16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22ZM17 12H15V16.41L17.29 18.7L18.7 17.29L17 15.59V12ZM6 7H4V9H6V7ZM7 4H11V2H7V0H5V5H7V4ZM6 11H4V13H6V11ZM10 9V7H8V9H10Z'
          fill='#3290FF'
        />
      </svg>
    </div>
  )
}

export default IconCalendar
