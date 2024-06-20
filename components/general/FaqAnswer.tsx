import stls from '@/styles/components/general/FaqAnswer.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { IconMinus, IconPlus } from '@/components/icons'

const FaqAnswer = ({ question = null, answer = null }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <li
      className={cn(stls.container, {
        [stls.isOpen]: isOpen,
      })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={cn(stls.icon)}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </div>
        <p
          className={cn(stls.p, {
            [stls.bold]: isOpen,
          })}>
          {question}
        </p>
      </div>
    </li>
  )
}

export default FaqAnswer
