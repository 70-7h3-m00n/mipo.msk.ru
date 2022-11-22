import { calculateClosestAdmission } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramAdmission = () => {
  const { program } = useContext(ProgramContext)

  const closestAdmission = program?.timenprice?.[0]?.closestAdmission

  if (closestAdmission) return closestAdmission

  return calculateClosestAdmission()
}

export default ProgramAdmission
