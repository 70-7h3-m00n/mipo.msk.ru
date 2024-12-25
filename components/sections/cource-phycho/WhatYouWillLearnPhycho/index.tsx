import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import Title from '@/components/parts/Title'

const WhatYouWillLearnPhycho = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <Title as='h2' color='black'>
          Чему вы научитесь
        </Title>

        <div className={stls.whatYouWillLearn}>
          {program?.whatYouWillLearn?.map(({ item }, idx: number) => (
            <div key={idx} className={stls.item}>{item}</div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearnPhycho
