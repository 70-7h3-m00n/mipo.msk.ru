import stls from '@/styles/components/sections/all/WebinarsAlt.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getImageHeight } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupCta } from '@/components/popups'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import { ImgWebinar } from '@/components/imgs'
import CardWebinarNew from '@/components/cards/CardWebinarNew'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMemo } from 'react'

type WebinarsAltType = {
  webinars: any
}

const WebinarsAlt = ({ webinars = null }: WebinarsAltType) => {
  const webinarsASC = webinars.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    if (dateA > dateB) return -1
    if (dateA < dateB) return 1
    return 0
  })

  console.log(webinarsASC.length)
  console.log(webinars.length)
  const route = useRouter()

  const sections = [
    { title: 'Все разделы', link: '/webinars' },
    { title: 'Психология', link: '?type=Психология' },
    { title: 'Нутрициология', link: '?type=Нутрициология' },
    { title: 'Юриспруденция', link: '?type=Юриспруденция' }
  ]

  const isRouteExist = sections
    .map(elem => elem.title)
    .slice(1)
    .includes(
      Array.isArray(route.query.type) ? route.query.type[0] : route.query.type
    )

  const webinarsFiltered = useMemo(() => {
    if (route.query.type && isRouteExist)
      return webinarsASC.filter(web => web.category === route.query.type)
    return webinarsASC
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.query.type, webinarsASC])

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Вебинары</h1>
        <div className={stls.sections}>
          {sections.map((elem, idx) => (
            <Link key={idx} href={elem.link}>
              <a
                className={cn(
                  stls.catalogLink,
                  (!route.query.type || !isRouteExist) &&
                    idx === 0 &&
                    stls.active,
                  route.query.type === elem.title && stls.active
                )}>
                {elem.title}
              </a>
            </Link>
          ))}
        </div>

        <div className={stls.webinars}>
          {webinars &&
            webinarsFiltered.map((webinar, idx) => (
              <div key={`CardWebinarAlt-${idx}`} className={stls.webinar}>
                <Popup
                  trigger={
                    <a>
                      <CardWebinarNew
                        date={webinar?.date}
                        name={webinar?.name}
                        category={webinar?.category}
                        picture={webinar?.picture?.url}
                        title={webinar?.title}
                      />
                    </a>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupCta
                      title={'Смотреть все вебинары'}
                      desc={
                        <>
                          Оставьте заявку, мы свяжемся с Вами в рабочие часы и
                          предоставим полный список вебинаров
                        </>
                      }
                      cta={'Оставить заявку'}
                      close={close}
                    />
                  )}
                </Popup>
              </div>
            ))}
        </div>
        <div className={stls.btn}>
          <PopupTrigger btn='delta' cta='seeAllWebinars' />
        </div>
      </Wrapper>
    </section>
  )
}

export default WebinarsAlt
