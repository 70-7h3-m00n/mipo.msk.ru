import stls from '@/styles/components/sections/all/WhatYouWillLearn.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'

const WhatYouWillLearn = () => {

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <h2 className={cn(stls.title)}>
          Чему вы научитесь
        </h2>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
