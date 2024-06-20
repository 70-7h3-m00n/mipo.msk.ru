import stls from '@/styles/components/sections/all/Desc.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconAtom } from '@/components/icons'

const Desc = () => {

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconAtom calpha barelyVisible />
        </div>
        <div className={stls.content}>
        </div>
      </Wrapper>
    </section>
  )
}

export default Desc
