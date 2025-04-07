import stls from './index.module.sass'
import { useContext, useState } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import scrollToBlock from '@/helpers/scrollToBlock'

interface Props {
  text?: string
  isDisabled?: boolean
  scrollToID?: string
}

const BtnTooltip = () => {
  const [onMouse, setOnMouse] = useState<boolean>(false)
  const onMouseEnter = () => {
    setOnMouse(true)
  }
  const onMouseLeave = () => {
    setOnMouse(false)
  }

  return (
    <span
      className={stls.component}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      i
      <div className={cn(stls.tooltip, onMouse && stls.show)}>
        Информацию о скидках и бонусах уточняйте у менеджеров приемной комиссии
      </div>
    </span>
  )
}

export default BtnTooltip
