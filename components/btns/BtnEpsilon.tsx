import stls from '@/styles/components/btns/BtnEpsilon.module.sass'
import cn from 'classnames'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'

const BtnEpsilon = ({ text = '' }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <button className={cn(stls.container, { [stls.atMba]: atMba })}>
      {text}
    </button>
  )
}

export default BtnEpsilon
