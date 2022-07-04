import stls from '@/styles/components/cards/CardTeacher.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const CardTeacher = ({ portrait, name, specialization, achievements }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <article className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <div className={cn(stls.cardBody, { [stls.altStyles]: altStyles })}>
        <div className={cn(stls.portrait, { [stls.altStyles]: altStyles })}>
          {portrait}
        </div>
        <div className={stls.content}>
          <h3 className={cn(stls.name, { [stls.altStyles]: altStyles })}>
            {name}
          </h3>
          <p
            className={cn(stls.specialization, {
              [stls.altStyles]: altStyles
            })}>
            {specialization}
            {/* Семейная психолохия и частная практика */}
          </p>
          <p className={cn(stls.achievements, { [stls.altStyles]: altStyles })}>
            {achievements}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CardTeacher
