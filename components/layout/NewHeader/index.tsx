import {
  IconHumburger,
  IconPhone,
  IconSearch,
  IconWhatsapp
} from '@/components/icons'
import Wrapper from '../Wrapper'
import stls from './index.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import SearchOfHeaderInput from '@/components/parts/SearchOfHeaderInput'
import UniversalButton from '@/components/btns/UniversalButton'
import Popup from 'reactjs-popup'
import {useEffect, useRef, useState } from 'react'
import IconButtonRightArrow from '@/components/icons/IconButtonRightArrow'
import cn from 'classnames'
import Title from '@/components/parts/Title'
import { PopupCta } from '@/components/popups'
import OpenMenuPoint from '@/components/parts/OpenMenuPoint'
import SecondLvlMenu from '@/components/parts/SecondLvlMenu'
import NewBurgerMenu from '@/components/parts/NewBurgerMenu'

const NewHeader = () => {
  const popupPhones = useRef<HTMLDivElement>(null)
  const wrapperPopupPhones = useRef<HTMLDivElement>(null)
  const [openPhonePopup, setOpenPhonePopup] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupPhones.current &&
        !popupPhones.current.contains(event.target as Node) &&
        !wrapperPopupPhones.current.contains(event.target as Node)
      ) {
        setOpenPhonePopup(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [openPhonePopup])

  const menuAboutCompany = [
    { title: 'Об институте', link: '/about' },
    { title: 'Отзывы', link: '/reviews' },
    { title: 'Вебинары', link: '/webinars' },
    { title: 'Преподаватели', link: '/teachers' },
    { title: 'Об организации', link: '/legal' }
  ]

  return (
    <header className={stls.component}>
      <Wrapper classNames={[stls.wrapperDesktop]}>
        <div className={stls.firstLine}>
          <div className={stls.logoWrapper}>
            <Link passHref legacyBehavior href='/'>
              <a>
                <Image
                  alt='Логотип МИПО'
                  src='/assets/imgs/general/logoblackmipo.svg'
                  layout='fill'
                />
              </a>
            </Link>
          </div>
          <div className={stls.rightBlockWrapper}>
            <SearchOfHeaderInput />
            <div className={stls.phone}>
              <IconPhone />
              <a href='tel:+7 (800) 700-31-34'>8 800 700 31-34</a>
            </div>
            <div className={stls.wrapperPhonesWrapper} ref={wrapperPopupPhones}>
              <UniversalButton
                bgColor='blue'
                className={stls.blutBtn}
                onClick={() => setOpenPhonePopup(!openPhonePopup)}>
                Позвонить
              </UniversalButton>
              <div
                ref={popupPhones}
                className={cn(
                  stls.tooltipBlock,
                  openPhonePopup && stls['active']
                )}>
                <div>
                  <Title fontSize={20}>Приемная комиссия</Title>
                  <div className={stls.phones}>
                    <a href='tel:+7 (499) 325-88-58'>8 (499) 325-88-58</a>
                    <a href='tel:+7 (800) 700-31-34'>8 (800) 700-31-34</a>
                  </div>
                </div>
                <div>
                  <Title fontSize={20}>Кураторский отдел</Title>
                  <div className={stls.phones}>
                    <a href='tel:+7 (800) 101-45-08'>8 (800) 101-45-08</a>
                  </div>
                </div>
                <div className={stls.buttons}>
                  <Popup
                    trigger={
                      <a className={stls.btnBlue}>
                        <IconPhone />
                        Обратный звонок
                      </a>
                    }
                    modal
                    nested>
                    {close => (
                      <PopupCta
                        title='Заказать обратный звонок'
                        close={close}
                      />
                    )}
                  </Popup>
                  <a className={cn(stls.btnBlue, stls.whatsapp)}>
                    <IconWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <a
              className={stls.btnLinkTo}
              rel='noreferrer'
              target='_blank'
              href='https://sdo-ipo.ru/login/index.php'>
              Войти
              <IconButtonRightArrow />
            </a>
          </div>
        </div>
        <div className={stls.seconLine}>
          <OpenMenuPoint />
          <div className={stls.lineSecondMenu}>
            <SecondLvlMenu
              textPointmenu='Об институте'
              menuLinks={menuAboutCompany}
            />
            <Link href='/contact'>
              <a>Контакты</a>
            </Link>
            {/* <Link href='/contact'>
              <a>Сведения об образовательной организации</a>
            </Link> */}
          </div>
        </div>
      </Wrapper>
      <Wrapper classNames={[stls.wrapperMobile]}>
        <div className={stls.mobileLineMenu}>
          <div className={stls.logoWrapper}>
            <Link passHref legacyBehavior href='/'>
              <a>
                <Image
                  alt='Логотип МИПО'
                  src='/assets/imgs/general/logoblackmipo.svg'
                  layout='fill'
                />
              </a>
            </Link>
          </div>
          <div className={stls.icons}>
            <a href='tel:+7 (800) 700-31-34'> 
              <IconPhone />
            </a>

            <NewBurgerMenu menuLinks={menuAboutCompany} />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default NewHeader
