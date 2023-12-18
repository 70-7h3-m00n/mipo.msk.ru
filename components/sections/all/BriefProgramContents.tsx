import stls from '@/styles/components/sections/all/BriefProgramContents.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const BriefProgramContents = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <div className={cn(stls.top, { [stls.altStyles]: altStyles })}>
          <div className={cn(stls.heading, { [stls.altStyles]: altStyles })}>
            <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
              Краткая программа курса
            </h2>
            <p className={cn(stls.p, { [stls.altStyles]: altStyles })}>
              {altStyles ? (
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
          <div className={cn(stls.qty, { [stls.altStyles]: altStyles })}>
            <ProgramModulesQty />
          </div>
        </div>
        <ProgramModules />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
