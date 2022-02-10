import stls from '@/styles/components/program/ProgramLabel.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramLabel = () => {
  const { program } = useContext(ProgramContext)

  return (
    <div className={stls.container}>
      <p className={stls.p}>{program?.category && program.category.label}</p>
    </div>
  )
}

export default ProgramLabel
