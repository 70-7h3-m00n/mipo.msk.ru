function getLastDayOfMonth(currentDate: Date) {
  // Получаем месяц текущей даты
  let currentMonth = currentDate.getMonth();

  // Устанавливаем дату на первый день следующего месяца
  currentDate.setMonth(currentMonth + 1, 1);

  // Затем вычитаем один день, чтобы получить последний день текущего месяца
  currentDate.setDate(currentDate.getDate() - 1);

  if (currentDate.getDate() === 31) {
    return currentDate.getDate() - 1
  } else {
    return currentDate.getDate();
  }
}

const setNextDay = (currentDate: Date, currentDay: number) =>
  currentDay <= 20
    ? currentDate.setDate(currentDay <= 10 ? 10 : 20)
    : getLastDayOfMonth(currentDate)

const calculateClosestAdmission = () => {
  const currentDate = new Date()
  setNextDay(currentDate, currentDate.getDate())
  return currentDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long' })
}

export default calculateClosestAdmission
