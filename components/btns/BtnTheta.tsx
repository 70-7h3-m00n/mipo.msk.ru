import stls from '@/styles/components/btns/BtnTheta.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnTheta = ({ text = '' }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <button className={cn(stls.container, { [stls.atMba]: atMba })}>
      {text}
    </button>
  )
}

export default BtnTheta
