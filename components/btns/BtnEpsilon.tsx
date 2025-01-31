import stls from '@/styles/components/btns/BtnEpsilon.module.sass'
import cn from 'classnames'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'

interface Props {
  text?: string
  onSend?: () => void
}

const BtnEpsilon = ({ text = '', onSend }: Props) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <button
      className={cn(stls.container, { [stls.altStyles]: altStyles })}
      onClick={onSend}>
      {text}
    </button>
  )
}

export default BtnEpsilon
