const calculateClosestAdmission = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  const day = currentDay < 20 ? '20' : '5'

  let output
  if (currentDay < 20) {
    output = `${day} ${months[currentMonth]}`
  } else {
    currentMonth === 11
      ? (output = `${day} ${months[0]}`)
      : (output = `${day} ${months[currentMonth + 1]}`)
  }

  return output
}

export default calculateClosestAdmission
