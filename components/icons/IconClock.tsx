import stls from '@/styles/components/icons/IconClock.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const IconClock = ({ color = null }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'
  return (
    <div className={cn(stls.container, { [stls.atMba]: atMba })}>
      <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 0C4.02973 0 0 4.02973 0 9C0 13.9703 4.02973 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02973 13.9703 0 9 0ZM9 16.0946C5.08054 16.0946 1.90541 12.9178 1.90541 9C1.90541 5.08216 5.08216 1.90541 9 1.90541C12.9178 1.90541 16.0946 5.08216 16.0946 9C16.0946 12.9195 12.9178 16.0946 9 16.0946Z'
          fill='#3290FF'
        />
        <path
          d='M11.726 13.291L7.92975 9.49479V3.86938H10.0379V8.62236L13.2162 11.7991L11.726 13.291Z'
          fill='#3290FF'
        />
      </svg>
    </div>
  )
}

export default IconClock
