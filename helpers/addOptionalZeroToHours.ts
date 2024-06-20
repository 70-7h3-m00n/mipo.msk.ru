const addOptionalZeroToHours = ({ date }: any) => {
  const hours = date.getUTCHours() + 3
  return hours < 10 ? `0${hours}` : hours
}

export default addOptionalZeroToHours
