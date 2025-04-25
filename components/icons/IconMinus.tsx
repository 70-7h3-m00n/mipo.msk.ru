import stls from '@/styles/components/icons/IconMinus.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

interface Props {
  circleColor?: string
  elementColor?: string
}
const IconMinus = ({ circleColor, elementColor }: Props) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <div className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <circle cx='19.5' cy='19.5' r='19.5' fill={circleColor ? circleColor : '#fff'} />
        <line x1='26' y1='19.5' x2='13' y2='19.5' stroke={elementColor ? elementColor : '#002C9F'} />
      </svg>
    </div>
  )
}

export default IconMinus
