import cn from 'classnames'
import stls from './index.module.sass'
import { IconArrowRight } from '@/components/icons'

interface Props {
  title: string
  lintTo?: string
  isPopural?: boolean
  timenprice?: { studyMonthsDuration: number }[]
  displayLabels: boolean
}

const CardWithoutImage = ({
  title,
  lintTo,
  isPopural,
  timenprice,
  displayLabels = false
}: Props) => {
  return (
    <a href={lintTo}>
      <div className={stls.component}>
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
        </div>

        <IconArrowRight classNames={[stls.icon]} />
      </div>
    </a>
  )
}

export default CardWithoutImage
