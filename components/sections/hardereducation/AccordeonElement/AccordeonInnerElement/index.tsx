import { useState } from 'react'
import stls from './index.module.sass'
import cn from 'classnames'

interface Props {
  title: string
  description: string,
  isOpenDefault: boolean
}

const AccordeonInnerElement = ({ title, description, isOpenDefault = false }: Props) => {
  const [isOpen, setIsOper] = useState<boolean>(isOpenDefault)

  return (
    <div className={stls.component}>
      <div onClick={() => setIsOper(!isOpen)} className={stls.title}>
        {title}
      </div>
      <div className={cn(stls.content, isOpen && stls.active)}>
        {description}
      </div>
    </div>
  )
}

export default AccordeonInnerElement
