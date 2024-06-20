import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnAlpha = ({
  text = '',
  isDisabled = false,
  href = null,
  target = null
}) => {
  const { program } = useContext(ProgramContext)

  return (
    <>
      {href ? (
        <a
          className={cn({
            [stls.container]: true,
          })}
          href={href}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {text}
        </a>
      ) : (
        <button
          className={cn({
            [stls.container]: true,
            [stls.isDisabled]: isDisabled,
          })}
          disabled={isDisabled}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
