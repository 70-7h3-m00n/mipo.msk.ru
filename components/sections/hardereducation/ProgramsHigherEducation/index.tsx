import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Title from '@/components/parts/Title'
import { useEducation } from '@/context/highereducation/EducationContext'
import { useState } from 'react'
import UniversalButton from '@/components/btns/UniversalButton'
import CardWithoutImage from '@/components/cards/CardWithoutImage'

const ProgramsHigherEducation = () => {
  const { programs } = useEducation()

  const [displayCount, setDisplayCount] = useState<number>(8)

  const changeCountToDisplat = () => {
    setDisplayCount(prev => prev + 4)
  }

  return (
    <section className={stls.component}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.titleBlock}>
          <Title as='h2' fontSize={44} className={stls.title}>
            Выберите программу <br /> высшего образования
          </Title>
          <div>
            <span>{programs.length}</span> направлений(я)
          </div>
        </div>

        <div className={stls.cards}>
          {programs.slice(0, displayCount).map(item => (
            <CardWithoutImage
              key={item.id}
              lintTo={
                item.slug && item['faculties_higher_educations'][0].slug
                  ? `/highereducation/${item['faculties_higher_educations'][0].slug}/${item.slug}`
                  : '#'
              }
              title={item.name}
              {...item}
            />
          ))}
        </div>

        <UniversalButton
          className={stls.button}
          borderColor='blue'
          borderPx={1}
          onClick={changeCountToDisplat}
          linkTo='/highereducation/all'
          colorText='#2663F0'>
          Показать еще факультеты
        </UniversalButton>
      </Wrapper>
    </section>
  )
}

export default ProgramsHigherEducation
