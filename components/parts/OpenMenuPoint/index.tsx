import stls from './index.module.sass'
import { useContext, useEffect, useRef, useState } from 'react'
import programsContext from '@/context/programs/programsContext'
import IconButtonRightArrow from '@/components/icons/IconButtonRightArrow'
import cn from 'classnames'
import IconNewMenu from '@/components/icons/IconNewMenu'
import IconNewMenuCross from '@/components/icons/IconNewMenuCross'
import getCategoryFromPrograms from '@/helpers/getCategoryFromPrograms'
import { useRouter } from 'next/router'

const OpenMenuPoint = () => {
  const data = useContext(programsContext)

  const dataLinksToCatalog = {
    professions: {
      link: 'professions',
      catalog: getCategoryFromPrograms(data.professions)
    },
    courses: {
      link: 'courses',
      catalog: getCategoryFromPrograms(data.courses)
    },
    mbas: {
      link: 'mba',
      catalog: getCategoryFromPrograms(data.mbas)
    },
    facultets: {
      link: 'highereducation',
      catalog: data.facultets.map(elem => ({
        title: elem.name,
        slug: elem.slug
      }))
    }
  }

  const dataTabs = [
    { title: 'Профессиональная переподготовка', slug: 'professions' },
    { title: 'Повышение квалификации', slug: 'courses' },
    { title: 'MBA', slug: 'mbas' },
    { title: 'Высшее образование', slug: 'facultets' }
  ]

  const [instaledObject, setIntallObject] = useState('professions')

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
      <div className={stls.buttonMenu} onClick={handleOpenMenu} ref={buttonRef}>
        {openMenu ? <IconNewMenuCross /> : <IconNewMenu />} Программы
      </div>
      <div className={cn(stls.openMenu, openMenu && stls['active'])}>
        <div className={stls.leftColumn}>
          {dataTabs.map((elem, idx) => (
            <div
              className={cn(
                stls.tab,
                instaledObject === elem.slug && stls.active
              )}
              key={idx}
              onClick={() => setIntallObject(elem.slug)}>
              {elem.title}
            </div>
          ))}
          <a
            className={stls.btnLinkTo}
            rel='noreferrer'
            target='_blank'
            href='https://sdo-ipo.ru/login/index.php'>
            Войти
            <IconButtonRightArrow />
          </a>
        </div>
        <div className={stls.rightColumn}>
          {dataLinksToCatalog[instaledObject].catalog.map((elem, key) => (
            <a
              key={key}
              href={`/${dataLinksToCatalog[instaledObject].link}/${elem.slug}`}
              className={stls.link}>
              {elem.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OpenMenuPoint
