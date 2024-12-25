import stls from './index.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnBorderBlack = ({ text = '', isDisabled = false }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <button
      className={cn({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled,
        [stls.altStyles]: altStyles
      })}
      disabled={isDisabled}>
      {text}
    </button>
  )
}

export default BtnBorderBlack
