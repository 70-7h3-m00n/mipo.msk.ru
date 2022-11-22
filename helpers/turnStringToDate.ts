import { dev } from '@/config/index'

const turnStringToDate = (dateString: string): Date | null => {
  const dateStringFormat = 'YYYY-MM-DD'

  const [year, month, date] = dateString.split('-')

  if (!year || !month || !date) {
    if (dev)
      throw new Error(
        `Error at turnStringToDate(). Invalid date string. Use the following format: ${dateStringFormat}`
      )
    return null
  }

  const numbers = {
    year: Number(year),
    month: Number(month),
    date: Number(date)
  }

  if (!numbers.year || !numbers.month || !numbers.date) {
    if (dev)
      throw new Error(
        `Error at turnStringToDate(). Invalid date string. Use the following format: ${dateStringFormat}`
      )
    return null
  }

  if (numbers.month < 0 || numbers.month > 11) {
    if (dev)
      throw new Error(
        `Error at turnStringToDate(). Month must be between 0 and 11. Use the following format: ${dateStringFormat}`
      )
    return null
  }

  return new Date(numbers.year, numbers.month, numbers.date)
}

export default turnStringToDate
