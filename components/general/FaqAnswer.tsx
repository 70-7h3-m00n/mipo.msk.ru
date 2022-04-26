import stls from '@/styles/components/general/FaqAnswer.module.sass'
import { useState, useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import ProgramContext from '@/context/program/programContext'
import { IconMinus, IconPlus } from '@/components/icons'

const FaqAnswer = ({ question = null, answer = null }) => {
  const [isOpen, setOpen] = useState(false)

  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <li
      className={cn(stls.container, {
        [stls.isOpen]: isOpen,
        [stls.atMba]: atMba
      })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={cn(stls.icon, { [stls.atMba]: atMba })}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </div>
        <p className={cn(stls.p, { [stls.bold]: isOpen, [stls.atMba]: atMba })}>
          {question}
        </p>
      </div>
      <div className={cn(stls.answer, { [stls.atMba]: atMba })}>
        {parse(marked(answer))}
      </div>
    </li>
  )
}

export default FaqAnswer
