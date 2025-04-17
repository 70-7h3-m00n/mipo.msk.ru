import Title from '../Title'
import stls from './index.module.sass'
import cn from 'classnames'

interface Props {
  title: string
  description: string
  className?: string
}

const FactoidWithoutIcon = ({ title, description, className }: Props) => {
  return (
    <div className={cn(stls.component, className)}>
      <div className={stls.content}>
        <Title fontSize={60} className={stls.title}>
          {title}
        </Title>
        <div className={stls.desc}>{description}</div>
      </div>
    </div>
  )
}

export default FactoidWithoutIcon
