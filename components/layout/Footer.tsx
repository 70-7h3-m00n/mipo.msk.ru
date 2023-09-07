import stls from '@/styles/components/layout/Footer.module.sass'
import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import ProgramsContext from '@/context/programs/programsContext'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import { number, numberAlt } from '@/data/contact'
import { city, street } from '@/data/location'
import {
  routeCourses,
  routeProfessions,
  routeWebinars,
  routeReviews,
  routeContact,
  routeLegal,
  routeAbout,
  routeHome,
  routePayment,
  routeTeachers
} from '@/data/routes'
import { BtnVk, BtnWhatsapp, BtnTelegram } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import FooterBottom from '@/components/general/FooterBottom'
import { FormAlpha } from '@/components/forms'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import edduData from '@/data/eddu'
import Image from 'next/image'

const staticLinks = [
  {
    val: 'Повышение квалификации',
    href: routeCourses
  },
  {
    val: 'Профессиональная переподготовка',
    href: routeProfessions
  },
  // {
  //   val: 'Вебинары',
  //   href: routeWebinars
  // },
  // {
  //   val: 'Преподаватели',
  //   href: routeTeachers
  // },
  // {
  //   val: 'Отзывы',
  //   href: routeReviews
  // },
  {
    val: 'Главная',
    href: routeHome
  },
  // {
  //   val: 'Об институте',
  //   href: routeAbout
  // },
  // {
  //   val: 'Сведения об образовательной организации',
  //   href: routeLegal
  // },
  {
    val: 'Контакты',
    href: routeContact
  },
  {
    val: 'Оплата',
    href: routePayment
  }
]

const Footer = () => {
  const [validComponent, setValidComponent] = useState(null)
  const router = useRouter()
  const { studyFields } = useContext(ProgramsContext)
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  useEffect(() => {
    if(getCookie('utm_source') !== undefined) {
      setValidComponent(true)
    } else {
      setValidComponent(false)
    }
  })

  // const fieldsLinks = studyFields.map(field =>
  //   ({ val: field.label, href: `/programs/${field.slug}` })
  // )

  return (
    <footer className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <div className={stls.left}>
          <div className={stls.top}>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.staticLinks]: true
              })}>
              {staticLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.staticLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.staticLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ul
              className={classNames({
                [stls.links]: true,
                [stls.fieldsLinks]: true
              })}>
              {fieldsLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.fieldsLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.fieldsLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul> */}
            <div className={stls.contact}>

              {/*TODO: 'reklama'*/}
              {
                validComponent || validComponent === null? <></>:
                  <div className={stls.numbers}>
                    <a href={number.href} className={stls.number}>
                      {number.val}
                    </a>
                    <a href={numberAlt.href} className={stls.number}>
                      {numberAlt.val}
                    </a>
                  </div>
              }

              <div className={stls.address}>
                {city}, {street}
              </div>
              <div className={stls.sm}>
                <BtnVk dark mlzero />
                <BtnWhatsapp dark />
                <BtnTelegram dark />
              </div>
              <div className={stls.edduBlock}>
                {
                  edduData.map((item, index) => (
                    <a key={index}
                       href={'https://eddu.pro/reviews/mipo-review/'}
                       target={'_blank'}
                       rel="noreferrer"
                    >
                      <Image src={item.svg}
                             alt={'svg'}
                             priority
                             style={{
                               objectFit: 'cover',
                               width: '100%',
                               height: 'auto'
                             }}
                      />
                    </a>))
                }
              </div>
              <div className={stls.btn}>
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
          </div>
          <div className={stls.bottom}>
            <FooterBottom />
          </div>
        </div>
        <div className={cn(stls.right, { [stls.altStyles]: altStyles })}>
          <div className={stls.formTitles}>
            <p className={stls.formTitle}>Остались вопросы?</p>
            <p className={stls.formTitle}>Свяжитесь с нами!</p>
          </div>

          <FormAlpha cta={'Связаться'} atFooter agreement />
        </div>
      </Wrapper>
      <div className={stls.footerBottom}>
        <FooterBottom />
      </div>
      <div className={cn(stls.bgRight, { [stls.altStyles]: altStyles })}></div>
    </footer>
  )
}

export default Footer
