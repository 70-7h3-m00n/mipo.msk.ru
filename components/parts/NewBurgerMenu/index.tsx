import stls from './index.module.sass'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconArrowRight, IconHumburger, IconPhone, IconSearch, IconWhatsapp } from '@/components/icons'
import IconCross from '@/components/icons/IconCross'
import SearchOfHeaderInput from '../SearchOfHeaderInput'
import IconNewMenuArrowDown from '@/components/icons/IconNewMenuArrowDown'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import Title from '../Title'

type MenuPoint = { title: string; link: string }
interface Props {
  menuLinks: MenuPoint[]
}

const NewBurgerMenu = ({ menuLinks }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenMenuLinks, setIsOpenMenuLinks] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.maxHeight = '90vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.maxHeight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.maxHeight = ''
    }
  }, [isOpen])

  const route = useRouter()

  useEffect(() => setIsOpen(false), [route.asPath]);

  return (
    <div className={stls.component}>
      {isOpen ? (
        <a onClick={() => setIsOpen(false)}>
          <IconCross />
        </a>
      ) : (
        <a onClick={() => setIsOpen(true)}>
          <IconHumburger color='black' />
        </a>
      )}

      {isOpen && (
        <div className={stls.menu}>
          <SearchOfHeaderInput className={stls.input} />
          <div className={stls.linksColumn}>
            <Link href='/professions'>
              <a>Программы</a>
            </Link>
            <div
              className={stls.btnAboutInst}
              onClick={() => setIsOpenMenuLinks(prev => !prev)}>
              Об институте <IconNewMenuArrowDown />
            </div>
            <div className={cn(stls.links, isOpenMenuLinks && stls['active'])}>
              {menuLinks.map((elem, idx) => (
                <Link key={idx} href={elem.link}>
                  <a>{elem.title}</a>
                </Link>
              ))}
            </div>
            <Link href='/professions'>
              <a>Контакты</a>
            </Link>
            {/* <Link href='/professions'>
              <a>Сведения об образовательной организации</a>
            </Link> */}
            <div className={stls.contacts}>
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
                    <PopupCta title='Заказать обратный звонок' close={close} />
                  )}
                </Popup>
                <a className={cn(stls.btnBlue, stls.whatsapp)}>
                  <IconWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewBurgerMenu
