import stls from '@/styles/components/sections/all/WebinarsAlt.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Popup from 'reactjs-popup'
import { getImageHeight } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupCta } from '@/components/popups'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import { ImgWebinar } from '@/components/imgs'

type WebinarsAltType = {
  webinars: any
}

const WebinarsAlt = ({ webinars = null }: WebinarsAltType) => {

const webinarsASC = webinars.sort((a: any, b: any) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  if (dateA > dateB) return -1
  if (dateA < dateB) return 1
  return 0
})

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Вебинары</h1>
        <ul className={stls.webinars}>
          {webinars &&
            webinarsASC.map((webinar: any, idx: any) => (
              <li key={`CardWebinarAlt-${idx}`} className={stls.webinar}>
                <Popup
                  trigger={
                    <div className={stls.trigger}>
                      <CardWebinarAlt
                        date={webinar?.date}
                        name={webinar?.name}
                        picture={
                          <ImgWebinar
                            src={webinar?.picture?.url}
                            alt={webinar?.title}
                            width={webinar?.picture?.width && 70}
                            height={getImageHeight({
                              width: 70,
                              widthInitial: webinar?.picture?.width,
                              heightInitial: webinar?.picture?.height
                            })}
                          />
                        }
                        title={webinar?.title}
                      />
                    </div>
                  }
                  modal
                  nested>
                </Popup>
              </li>
            ))}
        </ul>
        <div className={stls.btn}>
          <PopupTrigger btn='delta' cta='seeAllWebinars' />
        </div>
      </Wrapper>
    </section>
  )
}

export default WebinarsAlt
