import cn from 'classnames'
import stls from './index.module.sass'
import { IconArrowRight } from '@/components/icons'

interface Props {
  title: string
  lintTo?: string
}

const CardWithoutImage = ({ title, lintTo }: Props) => {
  return (
    <a href={lintTo}>
      <div className={stls.component}>
        <div className={stls.container}>
          <h3>{title}</h3>
        </div>

        <IconArrowRight classNames={[stls.icon]} />
      </div>
    </a>
  )
}

export default CardWithoutImage
