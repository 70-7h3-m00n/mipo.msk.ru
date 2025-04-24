import { useState } from 'react'
import stls from './index.module.sass'
import cn from 'classnames'
import { IconMinus, IconPlus } from '@/components/icons'
import AccordeonInnerElement from './AccordeonInnerElement'

type innerObject = { id?: string; title: string; description: string }

interface Props {
  title: string
  innerData: innerObject[]
}
const AccordeonElement = ({ title, innerData }: Props) => {
  const [isOpen, setIsOper] = useState<boolean>(false)

  return (
    <div className={stls.component}>
      <div onClick={() => setIsOper(!isOpen)} className={stls.title}>
        {isOpen ? <IconMinus /> : <IconPlus />}
        {title}
      </div>
      <div className={cn(stls.content, isOpen && stls.active)}>
        {innerData.map((innerElement, idx) => (
          <AccordeonInnerElement
            key={idx}
            title={innerElement.title}
            description={innerElement.description}
            isOpenDefault={true}
          />
        ))}
      </div>
    </div>
  )
}

export default AccordeonElement
