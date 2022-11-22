import { turnStringToDate } from '@/helpers/index'

const checkIfClosestAdmissionIsOutdated = (closestAdmission: string) => {
  const now = new Date()

  const closestAdmissionDate = turnStringToDate(closestAdmission)

  const closestAdmissionIsOutdated = closestAdmissionDate
    ? now > closestAdmissionDate
    : false

  return closestAdmissionIsOutdated
}

export default checkIfClosestAdmissionIsOutdated
