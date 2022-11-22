import { useContext } from 'react'
import {
  calculateClosestAdmission,
  checkIfClosestAdmissionIsOutdated
} from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'

const ProgramAdmission = () => {
  const { program } = useContext(ProgramContext)
  const closestAdmission = program?.timenprice?.[0]?.closestAdmission

  const closestAdmissionIsOutdated =
    checkIfClosestAdmissionIsOutdated(closestAdmission)

  if (closestAdmission && !closestAdmissionIsOutdated) return closestAdmission

  return calculateClosestAdmission()
}

export default ProgramAdmission
