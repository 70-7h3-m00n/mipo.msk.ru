import stls from '@/styles/components/cards/CardTeacher.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const CardTeacher = ({ portrait, name, specialization, achievements }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  return (
    <article className={cn(stls.container, { [stls.atMba]: atMba })}>
      <div className={cn(stls.cardBody, { [stls.atMba]: atMba })}>
        <div className={cn(stls.portrait, { [stls.atMba]: atMba })}>
          {portrait}
        </div>
        <div className={stls.content}>
          <h3 className={cn(stls.name, { [stls.atMba]: atMba })}>{name}</h3>
          <p className={cn(stls.specialization, { [stls.atMba]: atMba })}>
            {specialization}
            {/* Семейная психолохия и частная практика */}
          </p>
          <p className={cn(stls.achievements, { [stls.atMba]: atMba })}>
            {achievements}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CardTeacher
