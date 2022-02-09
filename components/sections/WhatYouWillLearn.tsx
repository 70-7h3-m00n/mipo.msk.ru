import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const WhatYouWillLearn = () => {
  const { program } = useContext(ProgramContext)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Чему вы научитесь</h2>
        <ul className={stls.whatYouWillLearn}>
          {program?.whatYouWillLearn &&
            program.whatYouWillLearn.map(({ item }, idx) => (
              <li key={item + idx} className={stls.item}>
                <div className={stls.icon}>
                  <IconCircleCheck calpha />
                </div>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
