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

const BtnBorderWhite = ({ text = '', isDisabled = false, scrollToID = '' }) => {
  const handleClickToButton = () => scrollToBlock(scrollToID)
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <button
      className={cn({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled
      })}
      disabled={isDisabled}
      onClick={handleClickToButton}
      style={{
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'transparent'
      }}>
      {text}
    </button>
  )
}

export default BtnBorderWhite
