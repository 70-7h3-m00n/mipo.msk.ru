import stls from './index.module.sass'
import { useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import scrollToBlock from '@/helpers/scrollToBlock'

const LineToScroll = () => {
  const { program } = useContext(ProgramContext)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rootClassNames = cn(stls.component, show && stls.show)

  const data = [
    { title: 'Диплом', scrollToId: 'diplom' },
    { title: 'Учебый план', scrollToId: 'program' },
    { title: 'Преподаватели', scrollToId: 'teachers' },
    { title: 'Навыки', scrollToId: 'skills' },
    { title: 'Стоимость', scrollToId: 'price' },
    { title: 'FAQ', scrollToId: 'faq' }
  ]

  return (
    <div className={rootClassNames}>
      {data.map((elem, index) => (
        <a
          key={index}
          onClick={() => scrollToBlock(elem.scrollToId)}
          className={stls.link}>
          {elem.title}
        </a>
      ))}
    </div>
  )
}

export default LineToScroll
