import { color } from 'framer-motion'
import stls from './index.module.sass'
import cn from 'classnames'

interface UniversalButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  idToScroll?: string
  bgColor?: 'blue' | 'white'
  borderColor?: 'blue' | 'white'
  borderPx?: number
}

const UniversalButton = ({
  children,
  onClick,
  idToScroll,
  bgColor,
  borderColor,
  borderPx
}: UniversalButtonProps) => {
  const scrollToBlock = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClick = () => {
    if (idToScroll) {
      scrollToBlock(idToScroll)
      return
    }
    if (onClick) {
      onClick()
      return
    }
  }

  const style = {
    border: borderPx ? `${borderPx}px solid ${borderColor ? borderColor : undefined}` : undefined,
  }
  return (
    <button className={cn(stls.component, stls[bgColor])} onClick={handleClick} style={style}>
      {children}
    </button>
  )
}

export default UniversalButton
