import stls from '@/styles/components/cards/CardWebinar.module.sass'
import truncate from 'truncate'
import classNames from 'classnames'
import { BtnText } from '@/components/btns'

const CardWebinar = ({ webinarData }: any) => {
  const {
    date: { day, month, time, weekday },
    name,
    topic,
    photo,
    bgColor
  } = webinarData

  return (
    <article
      className={classNames({ [stls.container]: true, [stls[bgColor]]: true })}>
      <p className={stls.p}>
        <span className={stls.date}>
          {day} {month},&nbsp;
        </span>
        {time}
      </p>
      <p className={stls.weekdayP}>{weekday}</p>
      <div className={stls.host}>
        {photo}
        <div className={stls.name}>
          <p className={stls.hostP}>Спикер:</p>
          <p className={stls.p}>{name}</p>
        </div>
      </div>
      <h3 className={stls.topic} title={topic}>
        {truncate(topic, 19)}
      </h3>
      <BtnText text='Подробнее' ctheta />
    </article>
  )
}

export default CardWebinar
