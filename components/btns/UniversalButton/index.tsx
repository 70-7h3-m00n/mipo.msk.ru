import Link from 'next/link'
import stls from './index.module.sass'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

interface UniversalButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  idToScroll?: string
  bgColor?: 'blue' | 'white'
  borderColor?: 'blue' | 'white' | 'black' | 'lightblue'
  borderPx?: number
  colorText?: string
  className?: string
  linkTo?: string
}

const UniversalButton = ({
  children,
  onClick,
  idToScroll,
  bgColor,
  borderColor,
  borderPx,
  colorText,
  linkTo,
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

  const router = useRouter()

  const goToLink = () => {
    router.push(linkTo)
  }

  const style = {
    border: borderPx
      ? `${borderPx}px solid ${borderColor ? borderColor : undefined}`
      : undefined,
    color: colorText ? colorText : undefined
  }

  return (
    <button
      className={classNames}
      onClick={linkTo ? goToLink : handleClick}
      style={style}>
      {children}
    </button>
  )
}

export default UniversalButton
