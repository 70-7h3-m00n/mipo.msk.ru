import stls from '@/styles/components/btns/BtnZeta.module.sass'
import { TPropClassNames, TGeneralChildren } from '@/types/index'
import { FC, useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'

type TBtnZeta = TPropClassNames & {
  children?: TGeneralChildren
  text?: string
  href?: string
  target?: '_blank' | '_self'
}

const BtnZeta: FC<TBtnZeta> = ({
  classNames,
  children,
  text = '',
  href,
  target
}) => {
  const { program } = useContext(ProgramContext)
  const atMba =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      className={
        cn(stls.container, getClassNames({ classNames }), {
          [stls.atMba]: atMba
        }) || undefined
      }
      {...(href ? { href } : undefined)}
      {...(target ? { target } : undefined)}
      {...(target === '_blank' ? { rel: 'noreferrer noopener' } : undefined)}>
      {text}
      {children}
    </Tag>
  )
}

export default BtnZeta
