import stls from '@/styles/components/program/ProgramModules.module.sass'
import ProgramModule from '@/components/program/ProgramModule'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModules = () => {
  const { program } = useContext(ProgramContext)

  return (
    <ul className={stls.container}>

    </ul>
  )
}

export default ProgramModules
