import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModulesQty = ({ isForPhychology = false }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div
      className={cn(
        stls.container,
        altStyles && stls.altStyles,
        isForPhychology && stls.forPhychology
      )}>
      <p
        className={cn(stls.qty, isForPhychology && stls.forPhychology, {
          [stls.altStyles]: altStyles
        })}>
        {program?.shortContents && program?.shortContents.length}
      </p>
      <p
        className={cn(
          stls.text,
          altStyles && stls.altStyles,
          isForPhychology && stls.forPhychology
        )}>
        Тематических модулей
      </p>
    </div>
  )
}

export default ProgramModulesQty
