import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Title from '@/components/parts/Title'
import { useEducation } from '@/context/highereducation/EducationContext'
import { useState } from 'react'
import UniversalButton from '@/components/btns/UniversalButton'
import CardWithoutImage from '@/components/cards/CardWithoutImage'

const ProgramsHigherEducation = () => {
  const { programs } = useEducation()

  const [displayCount, setDisplayCount] = useState<number>(6)

  const changeCountToDisplat = () => {
    setDisplayCount(prev => prev + 3)
  }

  const getCountPrograms = (id: string) => {
    const count = programs.filter(elem => {
      const faculty = elem['faculties_higher_education']
      console.log(faculty)
      return faculty && faculty.id === id
    })

    return count.length
  }

  return (
    <section className={stls.component}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.titleBlock}>
          <Title as='h2' fontSize={44}>
            Выберите программу <br/> высшего образования
          </Title>
          <div>
            <span>{programs.length}</span> направлений(я)
          </div>
        </div>

        <div className={stls.cards}>
          {programs.slice(0, displayCount).map(item => (
            <CardWithoutImage
              key={item.id}
              lintTo={item.slug ? item.slug : '#'}
              title={item.name}
            />
          ))}
        </div>

        <UniversalButton
          className={stls.button}
          borderColor='blue'
          borderPx={1}
          onClick={changeCountToDisplat}
          colorText='#2663F0'>
          Показать еще факультеты
        </UniversalButton>
      </Wrapper>
    </section>
  )
}

export default ProgramsHigherEducation
