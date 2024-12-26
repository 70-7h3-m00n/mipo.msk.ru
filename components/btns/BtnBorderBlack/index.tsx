import stls from './index.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

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

  const scrollToButton = () => {
    if (!scrollToID) return
    const targetElement = document.getElementById(scrollToID)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className={cn({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled,
        [stls.altStyles]: altStyles
      })}
      disabled={isDisabled}
      onClick={scrollToID && scrollToButton}>
      {text}
    </button>
  )
}

export default BtnBorderBlack
