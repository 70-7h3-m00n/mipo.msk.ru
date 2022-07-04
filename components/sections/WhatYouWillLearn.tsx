import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const WhatYouWillLearn = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
          Чему вы научитесь
        </h2>
        <ul className={stls.whatYouWillLearn}>
          {program?.whatYouWillLearn &&
            program.whatYouWillLearn.map(({ item }, idx) => (
              <li key={item + idx} className={stls.item}>
                <div className={cn(stls.icon, { [stls.altStyles]: altStyles })}>
                  <IconCircleCheck calpha altStyles={altStyles} />
                </div>
                <p className={cn(stls.p, { [stls.altStyles]: altStyles })}>
                  {item}
                </p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
