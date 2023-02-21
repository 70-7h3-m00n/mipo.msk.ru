import { getRuMonths } from '@/helpers/index'

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const months = getRuMonths()
  const day = currentDay < 20 ? '20' : '5'

  let output
  if (currentDay < 20) {
    output = `${day} ${months[currentMonth]}`
  } else {
    currentMonth === 11
      ? (output = `${day} ${months[0]}`)
      : (output = `${day} ${months[currentMonth + 1]}`)
  }

  return '28 февраля'
  return output
}

export default calculateClosestAdmission
