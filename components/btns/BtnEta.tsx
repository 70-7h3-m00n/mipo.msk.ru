import stls from '@/styles/components/btns/BtnEta.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnEta = ({ text = '' }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  return (
    <button className={cn(stls.container, { [stls.atMba]: atMba })}>
      {text}
    </button>
  )
}

export default BtnEta
