import styled from '@emotion/styled'
import Title from '../Title'
import stls from './index.module.sass'
import cn from 'classnames'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  iconSrc: string
  className?: string
  positionCircleBorderRadius?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
}

const FactoidWithIcon = ({
  title = 'Заголовок',
  description = 'Подзаголовок',
  iconSrc,
  positionCircleBorderRadius,
  className
}: Props) => {
  const mappingBorderRadius = {
    'top-left': '5px 5px 5px 50px',
    'top-right': '5px 5px 50px 5px',
    'bottom-left': '50px 5px 5px 5px',
    'bottom-right': '5px 50px 5px 5px'
  }

  const style = {
    borderRadius: mappingBorderRadius[positionCircleBorderRadius] || '5px'
  }

  return (
    <div className={cn(stls.component, className)} style={style}>
      <div className={stls.icon}>
        <Image src={iconSrc} alt='Иконка МИПО' layout='fill' />
      </div>
      <Title fontSize={32} className={stls.title}>{title}</Title>
      <div className={stls.desc}>{description}</div>
    </div>
  )
}

export default FactoidWithIcon
