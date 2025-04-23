import stls from './index.module.sass'
import cn from 'classnames'

interface UniversalButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  idToScroll?: string
  bgColor?: 'blue' | 'white'
  borderColor?: 'blue' | 'white'
  borderPx?: number
  colorText?: string
  className?: string
}

const UniversalButton = ({
  children,
  onClick,
  idToScroll,
  bgColor,
  borderColor,
  borderPx,
  colorText,
  className
}: UniversalButtonProps) => {
  const classNames = cn(stls.component, stls[bgColor], className)

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
    border: borderPx
      ? `${borderPx}px solid ${borderColor ? borderColor : undefined}`
      : undefined,
    color: colorText ? colorText : undefined
  }
  return (
    <button className={classNames} onClick={handleClick} style={style}>
      {children}
    </button>
  )
}

export default UniversalButton
