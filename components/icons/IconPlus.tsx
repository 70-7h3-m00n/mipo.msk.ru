import stls from '@/styles/components/icons/IconPlus.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const IconPlus = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <div className={cn(stls.container, { [stls.atMba]: atMba })}>
      <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Открыть</title>
        <circle cx='19.5' cy='19.5' r='19.5' fill='#fff' />
        <line x1='19.5' y1='13' x2='19.5' y2='26' stroke='#002C9F' />
        <line x1='26' y1='19.5' x2='13' y2='19.5' stroke='#002C9F' />
      </svg>
    </div>
  )
}

export default IconPlus
