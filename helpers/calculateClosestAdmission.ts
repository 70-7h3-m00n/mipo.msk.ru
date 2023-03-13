const setLastDayOfMonth = (currentDate: Date) => {
  currentDate.setMonth(currentDate.getMonth() + 1)
  currentDate.setDate(0)
}

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()

  currentDay <= 20
    ? currentDate.setDate(currentDay <= 10 ? 10 : 20)
    : setLastDayOfMonth(currentDate)

  return currentDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long' })
}

export default calculateClosestAdmission
