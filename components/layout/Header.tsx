import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import MenuMobile from '@/components/layout/MenuMobile'
import { city, street } from '@/data/location'
import { IconLocation } from '@/components/icons'
import { BtnFields } from '@/components/btns'
import {
  routeContact,
  routeReviews,
  routeAbout,
  routeLegal,
  routeWebinars,
  routeTeachers
} from '@/data/routes'
import MenuContext from '@/context/menu/menuContext'
import ProgramContext from '@/context/program/programContext'
import { useEffect, useContext } from 'react'
import { handleSwipedEvt } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'

const Header = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])

  const list = [
    {
      href: routeWebinars,
      val: 'Вебинары'
    },
    {
      href: routeTeachers,
      val: 'Преподаватели'
    },
    {
      href: routeContact,
      val: 'Контакты'
    }
  ]

  return (
    <header className={cn(stls.container, { [stls.atMba]: atMba })}>
      <MenuMobile />
      <Wrapper>
        <div className={cn(stls.top, { [stls.atMba]: atMba })}>
          <div className={stls.topleft}>
            <Link href={routeLegal}>
              <a className={stls.linkInfo}>
                Сведения об образовательной организации
              </a>
            </Link>
            <div className={stls.location}>
              <div className={stls.icon}>
                <IconLocation />
              </div>
              <p className={stls.p}>
                {city}, {street}
              </p>
            </div>
          </div>
          <div className={stls.topright}>
            <div className={stls.phone}>
              <BtnPhone withNumber />
            </div>
            <div className={stls.phoneNoNum}>
              <BtnPhone />
            </div>
            <PopupTrigger btn='epsilon' cta='callMeBack' />
          </div>
        </div>
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
          <div className={stls.btnFields}>
            <BtnFields />
          </div>
          {list.map((item, idx) => (
            <Link key={item.href + item.val} href={item.href}>
              <a
                className={cn([stls.link], {
                  [stls.linkFirst]: idx === 0,
                  [stls.linkThird]: idx === 2
                })}>
                {item.val}
              </a>
            </Link>
          ))}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
