import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import MenuMobile from '@/components/layout/MenuMobile'
import { city, street } from '@/data/location'
import { IconGeneralLogo, IconLocation } from '@/components/icons'
import { BtnFields } from '@/components/btns'
import {
  routeContact,
  routeLegal,
  routeWebinars,
  routeTeachers
} from '@/data/routes'
import MenuContext from '@/context/menu/menuContext'
import ProgramContext from '@/context/program/programContext'
import { useEffect, useContext, useState } from 'react'
import { handleSwipedEvt } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import { useRouter } from 'next/router'
import colors from '@/config/colors'
import SalesBlockToHeaderBottom from './SalesBlockToHeaderBottom'

const Header = () => {
  const router = useRouter()

  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { program } = useContext(ProgramContext)

  const isForPhychology =
    !!program &&
    [
      'Psychology',
      'prakticheskaya-psihologiya-m-sh-pp',
      'obshhaya-psihologiya'
    ].includes(program.study_field?.slug)

  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

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

  const redirectHeader = router.asPath.includes('new-courses')

  return (
    <header
      className={cn(!redirectHeader ? stls.container : stls.contentNewCourse, {
        [stls.altStyles]: altStyles,
        [stls.phychologyHeader]: isForPhychology
      })}>
      {program?.category?.type !== 'mba' && !router.asPath.includes('mba') && (
        <SalesBlockToHeaderBottom />
      )}
      <MenuMobile />

      {!redirectHeader ? (
        <Wrapper>
          <div className={cn(stls.top, altStyles && stls.altStyles)}>
            <div className={stls.topleft}>
              <Link href={routeLegal}>
                <a
                  className={cn(
                    stls.linkInfo,
                    isForPhychology && stls.forPhycho
                  )}>
                  Сведения об образовательной организации
                </a>
              </Link>
              <div
                className={cn(
                  stls.location,
                  isForPhychology && stls.forPhycho
                )}>
                <div className={stls.icon}>
                  <IconLocation
                    colorIcon={isForPhychology ? '#1A1A1A' : 'white'}
                  />
                </div>
                <p className={stls.p}>
                  {city}, {street}
                </p>
              </div>
            </div>
            <div className={stls.topright}>
              <div className={stls.wrapperPhones}>
                <div className={stls.phone}>
                  <BtnPhone
                    withNumber
                    colorText={isForPhychology && '#1A1A1A'}
                  />
                </div>
                <div className={stls.phone}>
                  <BtnPhone
                    withNumber
                    colorText={isForPhychology && '#1A1A1A'}
                    isSecondNumber
                  />
                </div>
              </div>
              <div className={stls.phoneNoNum}>
                <BtnPhone />
              </div>
              <PopupTrigger btn='epsilon' cta='callMeBack' />
            </div>
          </div>

          <div className={stls.row}>
            <Logo atHeader isForPhychology={isForPhychology} />

            <div className={stls.btns}>
              <BtnPhone colorText={isForPhychology ? 'black' : 'white'}/>
              <BtnHumburger isForPhychology={isForPhychology}/>
            </div>

            <div className={stls.btnFields}>
              <BtnFields isForPhychology={isForPhychology} />
            </div>
            {list.map((item, idx) => (
              <Link key={item.href + item.val} href={item.href}>
                <a
                  className={cn(
                    stls.link,
                    idx === 0 && stls.linkFirst,
                    idx === 2 && stls.linkThird,
                    isForPhychology && stls.forPhycho
                  )}>
                  {item.val}
                </a>
              </Link>
            ))}
          </div>
        </Wrapper>
      ) : (
        <>
          <div
            style={{
              background: '#17192C'
            }}>
            <Wrapper>
              <div className={cn(stls.top)}>
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
            </Wrapper>
          </div>

          <div className={stls.mobileCourse}>
            <Wrapper>
              <div
                className={stls.row}
                style={{
                  padding: '8px 0'
                }}>
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
                      className={cn(
                        stls.link,
                        idx === 0 && stls.linkFirst,
                        idx === 2 && stls.linkThird
                      )}
                      style={{ color: 'black' }}>
                      {item.val}
                    </a>
                  </Link>
                ))}
              </div>
            </Wrapper>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
