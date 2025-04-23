import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesHigher from '../ProgramModulesHigher'

const BriefProgramContentsHigher = () => {
  return (
    <section className={cn(stls.container)} id='program'>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={cn(stls.top)}>
          <div className={cn(stls.heading)}>
            <h2 className={cn(stls.title)}>Программа обучения - 4 года</h2>
          </div>
          <div className={cn(stls.qty)}></div>
        </div>
        <ProgramModulesHigher />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContentsHigher
