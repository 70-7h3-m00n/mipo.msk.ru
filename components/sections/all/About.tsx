import stls from '@/styles/components/sections/all/About.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import AboutLeaf from '@/components/general/AboutLeaf'
import ProsCircle from '@/components/general/ProsCircle'
import classNames from 'classnames'

type AboutType = {
  standalone?: boolean
}

const About = ({ standalone = false }: AboutType) => {
  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <div className={stls.leaf}>
          <AboutLeaf />
        </div>
        <div className={stls.circle}>
          <ProsCircle />
        </div>
      </Wrapper>
    </section>
  )
}

export default About
