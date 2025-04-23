import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import Title from '@/components/parts/Title'

const WhatYouWillLearnHigher = () => {
  const { program } = useContext(ProgramContext)

  const data = [
    { item: 'Будете иметь полное представление о банковской системе РФ' },
    { item: 'Разберетесь в психологии стресса' },
    { item: 'Сможете набраться опыта в психологическом консультировании' },
    { item: 'Освоите экспериментальную психологию' },
    { item: 'Изучите организационную психологию' },
    { item: 'Освоите общую психологию' }
  ]
  return (
    <section className={cn(stls.container)} id='skills'>
      <Wrapper>
        <Title as='h2' color='black'>
          Чему вы научитесь
        </Title>

        <div className={stls.whatYouWillLearn}>
          {data.map(({ item }, idx: number) => (
            <div key={idx} className={stls.item}>
              {item}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearnHigher
