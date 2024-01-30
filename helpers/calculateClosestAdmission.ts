const setLastDayOfMonth = (currentDate: Date) => {
  currentDate.setMonth(currentDate.getMonth() + 1)
  currentDate.setDate(10)
  currentDate.setMonth(currentDate.getMonth() - 1)
}

const setNextDay = (currentDate: Date, currentDay: number) =>
  currentDay <= 20
    ? currentDate.setDate(currentDay <= 10 ? 10 : 20)
    : setLastDayOfMonth(currentDate)

const calculateClosestAdmission = () => {
  const currentDate = new Date()

  setNextDay(currentDate, currentDate.getDate())

  return currentDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long' })
}

export default calculateClosestAdmission
