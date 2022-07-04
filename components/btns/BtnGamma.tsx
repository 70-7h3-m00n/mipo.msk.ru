import stls from '@/styles/components/btns/BtnGamma.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnGamma = ({ text = '' }) => {
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

export default BtnGamma
