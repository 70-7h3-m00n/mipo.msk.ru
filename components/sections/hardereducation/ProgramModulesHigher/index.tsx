import stls from './index.module.sass'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import AccordeonElement from '../AccordeonElement'

const ProgramModulesHigher = () => {
  const program = useHigherProgramContext()

  return (
    <ul className={stls.container}>
      {program?.programm &&
        program?.programm.map((program, idx) => (
          <AccordeonElement
            title={program.title}
            innerData={program.listprogramm}
            key={idx}
          />
        ))}
    </ul>
  )
}

export default ProgramModulesHigher
