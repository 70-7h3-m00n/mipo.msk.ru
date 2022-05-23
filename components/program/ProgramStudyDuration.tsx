import {
  getCasedRuYearString,
  getCasedRuMonthString,
  replaceSpacesWithNonBrakingSpaces
} from '@/helpers/index'

type TypeProgramStudyDuration = {
  studyMonthsDuration: number
  monthsOnly?: boolean
  nonBrakingSpace?: boolean
}

const ProgramStudyDuration = ({
  studyMonthsDuration,
  monthsOnly,
  nonBrakingSpace
}: TypeProgramStudyDuration) => {
  const years = Math.floor(+studyMonthsDuration / 12)
  const months = +studyMonthsDuration - 12 * years

  const output = monthsOnly
    ? getCasedRuMonthString({ months: studyMonthsDuration })
    : `${getCasedRuYearString({ years })} ${getCasedRuMonthString({ months })}`

  return (
    <>{nonBrakingSpace ? replaceSpacesWithNonBrakingSpaces(output) : output}</>
  )
}

export default ProgramStudyDuration
