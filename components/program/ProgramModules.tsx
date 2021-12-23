import stls from '@/styles/components/program/ProgramModules.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModules = () => {
  const {
    program: { shortContents }
  } = useContext(ProgramContext)

  return (
    <ul className={stls.container}>
      {shortContents &&
        shortContents
          .filter((item, idx) => idx < 5)
          .map(({ title, ShortContentsDescs }, idx) => (
            <ProgramModule
              key={title + idx}
              title={title}
              ShortContentsDescs={ShortContentsDescs}
            />
          ))}
    </ul>
  )
}

export default ProgramModules
