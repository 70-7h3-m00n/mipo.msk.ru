import { getRuMonths } from '@/helpers/index'

const checkIfClosestAdmissionIsOutdated = (closestAdmission: string) => {
  const now = new Date()
  const currentYear = now.getFullYear()

  const ruMonths = getRuMonths()

  const closestAdmissionDate = Number(closestAdmission?.split(' ')?.[0])
  const closestAdmissionMonth = ruMonths.indexOf(
    closestAdmission?.split(' ')?.[1]
  )

  const closestAdmissionParsedIntoDate =
    closestAdmissionDate &&
    closestAdmissionMonth &&
    closestAdmissionMonth !== -1
      ? new Date(currentYear, closestAdmissionMonth, closestAdmissionDate)
      : null

  const closestAdmissionIsOutdated = closestAdmissionParsedIntoDate
    ? now > closestAdmissionParsedIntoDate
    : false

  return closestAdmissionIsOutdated
}

export default checkIfClosestAdmissionIsOutdated
