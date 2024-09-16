import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import MenuContext from '@/context/menu/menuContext'
import ProgramContext from '@/context/program/programContext'
import { IconClose, IconCloseCircle } from '@/components/icons'

const BtnClose = ({ onClick = null, iconCloseCircle = false }) => {
  const { closeMenu } = useContext(MenuContext)

  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <button
      className={cn(stls.container, { [stls.altStyles]: altStyles })}
      onClick={onClick ? onClick : closeMenu}
      aria-label='Закрыть'>
      {iconCloseCircle ? <IconCloseCircle /> : <IconClose withHeight />}
    </button>
  )
}

export default BtnClose
