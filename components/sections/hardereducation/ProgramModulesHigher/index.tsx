import stls from './index.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModulesHigher = () => {
  const program = useHigherProgramContext()

  console.log(program.programm)
  return (
    <ul className={stls.container}>
      
      {program?.programm &&
        program?.programm
          .filter((item, idx) => idx < 5)
          .map((shortContent, idx) => (
            <ProgramModule
              key={shortContent?.title + idx}
              title={shortContent.title}
              ShortContentsDescs={shortContent?.ShortContentsDescs}
            />
          ))}
    </ul>
  )
}

export default ProgramModulesHigher
