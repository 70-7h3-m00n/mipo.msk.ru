import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import MenuContext from '@/context/menu/menuContext'
import ProgramContext from '@/context/program/programContext'
import { IconClose, IconCloseCircle } from '@/components/icons'

const BtnClose = ({ onClick = null, iconCloseCircle = false }) => {
  const { closeMenu } = useContext(MenuContext)

  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  return (
    <button
      className={cn(stls.container, { [stls.atMba]: atMba })}
      onClick={onClick ? onClick : closeMenu}
      aria-label='Закрыть'>
      {iconCloseCircle ? <IconCloseCircle /> : <IconClose />}
    </button>
  )
}

export default BtnClose
