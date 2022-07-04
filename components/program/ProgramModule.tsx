import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState, useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { IconCircleCheck, IconMinus, IconPlus } from '@/components/icons'

const ProgramModule = ({ title, ShortContentsDescs }) => {
  // const [isOpen, setOpen] = useState(false)
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || program?.category?.type === 'profession'

  return (
    <li
      // className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      className={cn({ [stls.container]: true })}>
      {/* <div className={stls.title} onClick={() => setOpen(!isOpen)}> */}
      <div className={stls.title}>
        {/* <div className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div> */}
        <div className={cn(stls.icon)}>
          <IconCircleCheck atMba={atMba} />
        </div>
        {/* <p className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}> */}
        <p className={cn({ [stls.pTitle]: true, [stls.atMba]: atMba })}>
          {title}
        </p>
      </div>
      <div className={stls.ShortContentsDescs}>
        <p className={stls.p}>В результате обучения вы:</p>
        {/* <ul className={stls.list}>
          {ShortContentsDescs &&
            ShortContentsDescs.map((ShortContentsDescs, idx) => (
              <li key={ShortContentsDescs.desc + idx} className={stls.item}>
                <p className={stls.p}>{ShortContentsDescs.desc}</p>
              </li>
            ))}
        </ul> */}
      </div>
    </li>
  )
}

export default ProgramModule
