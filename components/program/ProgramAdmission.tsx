import { useContext } from 'react'
import {
  calculateClosestAdmission,
  checkIfClosestAdmissionIsOutdated,
  getRuMonths,
  turnStringToDate
} from '@/helpers/index'

import ProgramContext from '@/context/program/programContext'

const ProgramAdmission = () => {
  const { program } = useContext(ProgramContext)
  const closestAdmission = program?.timenprice?.[0]?.closestAdmission
  const closestAdmissionDate = turnStringToDate(closestAdmission)

  const ruMonths = getRuMonths()

  const closestAdmissionIsOutdated =
    checkIfClosestAdmissionIsOutdated(closestAdmission)

  if (closestAdmission && !closestAdmissionIsOutdated)
    return `${closestAdmissionDate.getDate()} ${
      ruMonths[closestAdmissionDate.getMonth()]
    }`

  // const test = new Date('2021-09-01')

  return calculateClosestAdmission()
}

export default ProgramAdmission
