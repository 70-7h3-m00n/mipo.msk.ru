import { getThreeLettersRuMonths, getRuDaysOfWeek } from '@/helpers/index'
import stls from './index.module.sass'
import { IconArrowRight, IconBell } from '@/components/icons'
import CtaText from '@/components/general/CtaText'
import {
  addOptionalZeroToMinutes,
  addOptionalZeroToHours
} from '@/helpers/index'
import Image from 'next/image'

type CardWebinarAltType = {
  date: Date
  name: string
  picture: string
  title: string
  category?: string
}

const CardWebinarNew = ({
  date,
  name,
  picture,
  title,
  category
}: CardWebinarAltType) => {
  const newDate = new Date(date)

  const monhts = getThreeLettersRuMonths()
  const daysOfWeek = getRuDaysOfWeek()
  const hours = addOptionalZeroToHours({ date: newDate })
  const minutes = addOptionalZeroToMinutes({ date: newDate })

  return (
    <button className={stls.container}>
      {category && <div className={stls.category}>{category}</div>}

      <div className={stls.content}>
        <div className={stls.bell}>
          <IconBell />
        </div>
        <div className={stls.when}>
          <span className={stls.date}>
            {newDate.getDate()} {monhts[newDate.getMonth()]}., {hours}:{minutes}{' '}
          </span>
          <span className={stls.dayOfWeek}>{daysOfWeek[newDate.getDay()]}</span>
        </div>
        <div className={stls.speaker}>
          <div className={stls.img}><Image src={picture} alt='Ведущий вебинара МИПО' layout='fill'/> </div>
          <div className={stls.right}>
            <span className={stls.label}>Спикер:</span>
            <p className={stls.name}>{name}</p>
            <h2 className={stls.title}>{title}</h2>
          </div>
        </div>
      </div>

      <div className={stls.link}>
        <CtaText text={'Подробнее'} ctheta />
      </div>
      <div className={stls.arrow}>
        <IconArrowRight />
      </div>
    </button>
  )
}

export default CardWebinarNew
