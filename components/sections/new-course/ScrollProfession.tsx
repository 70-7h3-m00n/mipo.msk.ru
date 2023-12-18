import styles from '@/styles/components/sections/new-course/ScrollProfession.module.sass'
import listProfession from '@/data/lists/listProfession'
import CardNewProfession from '@/components/cards/CardNewProfession'
import React, { useRef, useState } from 'react'

const ScrollProfession = () => {
  const blockRef = useRef<HTMLDivElement | null>(null)
  const [startX, setStartX] = useState<number | null>(null)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elem = blockRef.current!
    setStartX(event.pageX - elem.offsetLeft)
    setScrollLeft(elem.scrollLeft)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elem = blockRef.current!
    if (!startX) return
    event.preventDefault()
    const x = event.pageX - elem.offsetLeft
    const walk = x - startX
    elem.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setStartX(null)
  }

  return (
    <section className={'container'}>
      <h2 className={styles.header}>5 шагов к новой профессии</h2>

      <div className={styles.wrapperCard}
           ref={blockRef}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}
      >
        {
          listProfession.map((item, index) => (
            <CardNewProfession title={item.title}
                               description={item.description}
                               image={item.image}
                               index={item.index}
                               key={index}
            />
          ))
        }
      </div>

    </section>
  )
}

export default ScrollProfession
