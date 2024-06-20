import stls from '@/styles/components/cards/CardTeacher.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const CardTeacher = ({ portrait, name, specialization, achievements }: any) => {

  return (
    <article className={cn(stls.container)}>
      <div className={cn(stls.cardBody)}>
        <div className={cn(stls.portrait)}>
          {portrait}
        </div>
        <div className={stls.content}>
          <h3 className={cn(stls.name)}>
            {name}
          </h3>
          <p
            className={cn(stls.specialization)}>
            {specialization}
            {/* Семейная психолохия и частная практика */}
          </p>
          <p className={cn(stls.achievements)}>
            {achievements}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CardTeacher
