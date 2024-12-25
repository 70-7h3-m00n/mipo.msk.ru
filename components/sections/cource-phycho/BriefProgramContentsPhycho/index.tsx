import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import FaqAnswer from '@/components/general/FaqAnswer'
import Popup from 'reactjs-popup'
import { IconGeneralInfo } from '@/components/icons'

const BriefProgramContentsPhycho = () => {
  const { program } = useContext(ProgramContext)

  return (
    <section className={cn(stls.container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={cn(stls.top)}>
          <div className={cn(stls.heading)}>
            <h2 className={cn(stls.title)}>Программа курса</h2>
          </div>
          <div className={cn(stls.qty)}>
            <ProgramModulesQty isForPhychology />
            <Popup
              trigger={open => (
                <a href='#!' className={stls.icon}>
                  <IconGeneralInfo color='#AC94F4' />
                </a>
              )}
              closeOnDocumentClick>
              <div className={stls.infoContent}>
                Чтобы программа соответствовала запросам рынка труда, мы
                проводим 3 этапа исследований
              </div>
            </Popup>
          </div>
        </div>
        <ProgramModules isForPhychology />
      </Wrapper>
    </section>
  )
}

export default BriefProgramContentsPhycho
