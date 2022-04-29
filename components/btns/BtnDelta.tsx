import stls from '@/styles/components/btns/BtnDelta.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnDelta = ({ text = '', href = null }) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  if (!href)
    return (
      <button className={cn(stls.container, { [stls.atMba]: atMba })}>
        {text}
      </button>
    )
  if (href)
    return (
      <Link href={href}>
        <a className={cn(stls.container, { [stls.atMba]: atMba })}>{text}</a>
      </Link>
    )
}

export default BtnDelta
