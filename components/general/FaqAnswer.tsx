import stls from '@/styles/components/general/FaqAnswer.module.sass'
import { useState, useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import ProgramContext from '@/context/program/programContext'
import { IconMinus, IconPlus } from '@/components/icons'

const FaqAnswer = ({
  question = null,
  answer = null,
  isForPhychology = false
}) => {
  const [isOpen, setOpen] = useState(false)

  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <li
      className={cn(
        stls.container,
        isOpen && stls.isOpen,
        altStyles && stls.altStyles
      )}>
      <div
        className={cn(stls.title, isForPhychology && stls.forPhychology)}
        onClick={() => setOpen(!isOpen)}>
        <div className={cn(stls.icon, { [stls.altStyles]: altStyles })}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </div>
        <p
          className={cn(stls.p, {
            [stls.bold]: isOpen,
            [stls.altStyles]: altStyles
          })}>
          {question}
        </p>
      </div>
      <div
        className={cn(
          stls.answer,
          altStyles && stls.altStyles,
          isForPhychology && stls.forPhychology
        )}>
        {parse(marked(answer))}
      </div>
    </li>
  )
}

export default FaqAnswer
