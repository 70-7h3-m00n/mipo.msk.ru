import cn from 'classnames'
import stls from './index.module.sass'
import { IconArrowRight } from '@/components/icons'

interface Props {
  title: string
  lintTo?: string
  isPopural?: boolean
  timenprice?: { studyMonthsDuration: number }[]
  displayLabels?: boolean
  bgColor?: 'lightBlue'
  textDown?: string
  className?: string
}

const CardWithoutImage = ({
  title,
  lintTo,
  isPopural,
  timenprice,
  displayLabels = false,
  bgColor,
  textDown,
  className
}: Props) => {
  return (
    <a href={lintTo}>
      <div className={cn(stls.component, stls[bgColor], className)}>
        <div className={stls.container}>
          {displayLabels && (
            <div className={stls.labels}>
              {isPopural && <span className={stls.popular}>Популярный</span>}
              <span>Профессия</span>
              <span>
                {timenprice[0].studyMonthsDuration % 12 === 0
                  ? `${timenprice[0].studyMonthsDuration} мес`
                  : `${timenprice[0].studyMonthsDuration % 12} лет`}{' '}
              </span>
            </div>
          )}

          <h3>{title}</h3>
          {textDown && <div className={stls.textDown}>{textDown}</div>}
        </div>

        <IconArrowRight classNames={[stls.icon]} />
      </div>
    </a>
  )
}

export default CardWithoutImage
