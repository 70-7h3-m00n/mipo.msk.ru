import stls from './index.module.sass'
import cn from 'classnames'

interface Props {
  title?: string
  min?: number
  max?: number
  step?: number
  minText?: string
  maxText?: string
  className?: string
  value?: number
  onChange?: (value: number) => void
}
const InputRange = ({
  title,
  min = 1,
  max = 10,
  step = 1,
  minText,
  maxText,
  value = 1,
  onChange,
  className
}: Props) => {
  const rootClassNames = cn(stls.component, className)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    if (onChange) onChange(newValue)
  }

  return (
    <div className={rootClassNames}>
      {title && <div className={stls.label}>{title}</div>}

      <input
        type='range'
        className={stls.range}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      {value !== min && value !== max && (
        <div className={stls.value}>{value}</div>
      )}

      {(minText || maxText) && (
        <div className={stls.values}>
          <span>{minText}</span>
          <span>{maxText}</span>
        </div>
      )}
    </div>
  )
}

export default InputRange
