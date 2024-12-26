import stls from './index.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import scrollToBlock from '@/helpers/scrollToBlock'

interface Props {
  text?: string
  isDisabled?: boolean
  scrollToID?: string
}

const BtnBorderBlack = ({ text = '', isDisabled = false, scrollToID = '' }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const handleClickToButton = () => scrollToBlock(scrollToID)

  return (
    <button
      className={cn({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled,
        [stls.altStyles]: altStyles
      })}
      disabled={isDisabled}
      onClick={scrollToID && handleClickToButton}>
      {text}
    </button>
  )
}

export default BtnBorderBlack
