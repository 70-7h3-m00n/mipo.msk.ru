import stls from '@/styles/components/sections/all/BriefProgramContents.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const BriefProgramContents = () => {

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <div className={cn(stls.top)}>
          <div className={cn(stls.heading)}>
            <h2 className={cn(stls.title)}>
              Краткая программа курса
            </h2>
            <p className={cn(stls.p)}>

            </p>
          </div>
          <div className={cn(stls.qty)}>
            <ProgramModulesQty />
          </div>
        </div>
        <ProgramModules />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
