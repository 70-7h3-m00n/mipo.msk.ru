import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModulesQty = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <p className={cn(stls.qty, { [stls.altStyles]: altStyles })}>
        {program?.shortContents && program?.shortContents.length}
      </p>
      <p className={cn(stls.text, { [stls.altStyles]: altStyles })}>
        Тематических модулей
      </p>
    </div>
  )
}

export default ProgramModulesQty
