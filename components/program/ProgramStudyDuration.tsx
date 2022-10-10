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

  if (studyMonthsDuration <= 0.25) return <>недели</>

  if (studyMonthsDuration <= 0.5) return <>двух недель</>

  if (studyMonthsDuration <= 0.75) return <>трёх недель</>

  if (nonBrakingSpace) return <>{replaceSpacesWithNonBrakingSpaces(output)}</>

  return <>{output}</>
}

export default ProgramStudyDuration
