import stls from '@/styles/components/cards/CardSchedule.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import ImgAllWebinars from '@/components/imgs/webinars/ImgAllWebinars'
import CtaText from '@/components/general/CtaText'
import { IconPlayer } from '@/components/icons'
import { routeWebinars } from '@/data/routes'

const CardSchedule = ({ mobileLayout = false }) => {
  return (
    <Link href={routeWebinars}
          className={stls.linkContainer}>
        <article
          className={classNames({
            [stls.container]: true,
            [stls.mobileLayout]: mobileLayout
          })}>
          <div className={stls.img}>
            <ImgAllWebinars />
          </div>
          <div className={stls.content}>
            <div className={stls.circle}>
              <div className={stls.icon}>
                <IconPlayer />
              </div>
            </div>
            <h3 className={stls.title}>Расписание всех&nbsp;вебинаров</h3>
            <div className={stls.btn}>
              <CtaText text='Смотреть все' cnu />
            </div>
          </div>
        </article>
    </Link>
  )
}

export default CardSchedule
