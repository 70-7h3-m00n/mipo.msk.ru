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

  if (closestAdmissionDate && !closestAdmissionIsOutdated)
    return (
      <>
        `${closestAdmissionDate.getDate()} $
        {ruMonths[closestAdmissionDate.getMonth()]}`
      </>
    )

  return <>{calculateClosestAdmission()}</>
}

export default ProgramAdmission
