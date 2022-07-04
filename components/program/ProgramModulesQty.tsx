import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModulesQty = () => {
  const { program } = useContext(ProgramContext)
  const atMba =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div className={cn(stls.container, { [stls.atMba]: atMba })}>
      <p className={cn(stls.qty, { [stls.atMba]: atMba })}>
        {program?.shortContents && program?.shortContents.length}
      </p>
      <p className={cn(stls.text, { [stls.atMba]: atMba })}>
        Тематических модулей
      </p>
    </div>
  )
}

export default ProgramModulesQty
