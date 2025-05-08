import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Title from '@/components/parts/Title'
import CardWithiImage from '@/components/cards/CardWithImage'
import { useEducation } from '@/context/highereducation/EducationContext'
import { useState } from 'react'
import UniversalButton from '@/components/btns/UniversalButton'

const Faculties = () => {
  const { facultets, programs } = useEducation()

  const [displayCount, setDisplayCount] = useState<number>(6)

  const changeCountToDisplat = () => {
    setDisplayCount(prev => prev + 3)
  }

  const getCountPrograms = (id: string) => {
    const count = programs.filter(elem => {
      return elem['faculties_higher_educations'].some(elem => elem.id === id)
    })

    return count.length
  }

  return (
    <section className={stls.component} id='catalog'>
      <Wrapper classNames={[stls.wrapper]}>
        <Title as='h2' fontSize={44} className={stls.title}>
          Факультеты
        </Title>

        <div className={stls.cards}>
          {facultets.slice(0, displayCount).map(item => (
            <CardWithiImage
              key={item.id}
              lintTo={item.slug ? `/highereducation/${item.slug}` : '#'}
              title={item.name}
              imageSrc={item.image[0].formats.small.url}
              countPrograms={getCountPrograms(item.id)}
            />
          ))}
        </div>
        {facultets.length > displayCount && (
          <UniversalButton
            className={stls.button}
            borderColor='blue'
            borderPx={1}
            onClick={changeCountToDisplat}
            colorText='#2663F0'>
            Показать еще факультеты
          </UniversalButton>
        )}
      </Wrapper>
    </section>
  )
}

export default Faculties
