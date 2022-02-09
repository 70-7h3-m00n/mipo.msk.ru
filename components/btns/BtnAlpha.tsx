import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import classNames from 'classnames'

const BtnAlpha = ({
  text = '',
  isDisabled = false,
  href = null,
  target = null
}) => {
  return (
    <>
      {href ? (
        <a
          className={classNames({
            [stls.container]: true
          })}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {text}
        </a>
      ) : (
        <button
          className={classNames({
            [stls.container]: true,
            [stls.isDisabled]: isDisabled
          })}
          disabled={isDisabled}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
