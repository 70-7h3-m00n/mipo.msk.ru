import stls from '@/styles/components/sections/BriefProgramContents.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const BriefProgramContents = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper>
        <div className={cn(stls.top, { [stls.atMba]: atMba })}>
          <div className={cn(stls.heading, { [stls.atMba]: atMba })}>
            <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
              Краткая программа курса
            </h2>
            <p className={cn(stls.p, { [stls.atMba]: atMba })}>
              {atMba ? (
                <>
                  По результатам исследования предложений на рынке
                  образовательных услуг мы составили список лучших практик. На
                  их основании с учётом самых распространённых требований
                  работодателей были сформированы программы обучения
                </>
              ) : (
                <>
                  Практики, которым мы учим, и методология, на которой строится
                  курс, проверены не только практическим опытом преподавателей,
                  но и строгими научными исследованиями
                </>
              )}
            </p>
          </div>
          <div className={cn(stls.qty, { [stls.atMba]: atMba })}>
            <ProgramModulesQty />
          </div>
        </div>
        <ProgramModules />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
