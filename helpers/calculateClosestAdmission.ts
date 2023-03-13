import { getRuMonths } from '@/helpers/index'

function getLastDayOfMonth(year: number, month: number) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const months = getRuMonths()
  const day =
    (currentDay <= 10 && '10') ||
    (currentDay <= 20 && '20') ||
    getLastDayOfMonth(currentYear, currentMonth)

  let output = `${day} ${months[currentMonth]}`

  return output
}

export default calculateClosestAdmission
