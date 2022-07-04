import stls from '@/styles/components/btns/BtnEpsilon.module.sass'
import cn from 'classnames'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'

const BtnEpsilon = ({ text = '' }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <button className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      {text}
    </button>
  )
}

export default BtnEpsilon
