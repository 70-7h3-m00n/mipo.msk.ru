import stls from '@/styles/components/program/ProgramModules.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModules = () => {
  const { program } = useContext(ProgramContext)

  return (
    <ul className={stls.container}>
      {program?.shortContents &&
        program?.shortContents
          .filter((item, idx) => idx < 5)
          .map((shortContent, idx) => (
            <ProgramModule
              key={shortContent?.title + idx}
              title={shortContent?.title}
              ShortContentsDescs={shortContent?.ShortContentsDescs}
            />
          ))}
    </ul>
  )
}

export default ProgramModules
