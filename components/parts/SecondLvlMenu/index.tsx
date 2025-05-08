import { IconSearch } from '@/components/icons'
import stls from './index.module.sass'
import IconSearchForInput from '@/components/icons/IconSearchForInput'
import { useContext, useEffect, useRef, useState } from 'react'
import programsContext from '@/context/programs/programsContext'
import IconButtonRightArrow from '@/components/icons/IconButtonRightArrow'
import cn from 'classnames'
import IconNewMenu from '@/components/icons/IconNewMenu'
import IconNewMenuCross from '@/components/icons/IconNewMenuCross'
import IconNewMenuArrowDown from '@/components/icons/IconNewMenuArrowDown'
import Link from 'next/link'
import { useRouter } from 'next/router'

type MenuPoint = { title: string; link: string }
interface Props {
  textPointmenu: string
  menuLinks: MenuPoint[]
}

const SecondLvlMenu = ({ textPointmenu = 'Пункт меню', menuLinks }: Props) => {
  const data = useContext(programsContext)

  const [openMenu, setOpenMenu] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkClickToMenu = (event: MouseEvent): void => {
      if (
        wrapperRef.current &&
        buttonRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false)
      }
    }

    window.addEventListener('click', checkClickToMenu)

    return () => {
      window.removeEventListener('click', checkClickToMenu)
    }
  }, [])

  const route = useRouter()
  useEffect(() => setOpenMenu(false), [route.asPath])

  const handleOpenMenu = () => setTimeout(() => setOpenMenu(!openMenu), 0)

  return (
    <div className={stls.component} ref={wrapperRef}>
      <div
        className={cn(stls.buttonMenu, openMenu && stls['active'])}
        onClick={handleOpenMenu}
        ref={buttonRef}>
        {textPointmenu} <IconNewMenuArrowDown />
      </div>
      <div className={cn(stls.openMenu, openMenu && stls['active'])}>
        {menuLinks.map((elem, idx) => (
          <Link key={idx} href={elem.link}>
            <a>{elem.title}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SecondLvlMenu
