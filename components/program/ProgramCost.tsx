import stls from '@/styles/components/program/ProgramCost.module.sass'
import cn from 'classnames'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'

const ProgramCost = ({ withPerMonth = false }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const atCourse = program?.category?.type === 'course'
  const atProfession = program?.category?.type === 'profession'

  const price =
    (program?.timenprice && Number(program?.timenprice?.[0]?.price)) || 0
  const discount =
    (program?.timenprice && Number(program?.timenprice?.[0]?.discount)) ||
    discountNum

  const rprice =
    Math.round(Math.ceil((price / (100 - discount)) * 100) / 1000) * 1000

  const perMonthPrice = Math.round(Math.round(price && +price / 12) / 100) * 100
  const perMonthRPrice =
    Math.round(Math.round(rprice && +rprice / 12) / 100) * 100

  let priceWithoutCeil = Math.round(Math.ceil((price / (100 - discount)) * 100))
  console.log(priceWithoutCeil)
  priceWithoutCeil = Math.round(priceWithoutCeil + priceWithoutCeil * 0.17)
  const priceToMounth = Math.round(Math.ceil(priceWithoutCeil / 12))

 

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          <p className={cn(stls.label, { [stls.altStyles]: altStyles })}>
            Беспроцентная рассрочка на 12 месяцев
          </p>
          <span className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
            <span className={stls.bold}>
              {!atProfession && !atCourse
                ? toNumberWithSpaces(Math.round(Math.ceil(price / 12)))
                : toNumberWithSpaces(Math.ceil(priceToMounth * 0.35)) || ''}
              {/* {toNumberWithSpaces(perMonthPrice) || ''} */}
              {/* {toNumberWithSpaces(perMonthRPrice / 2) || ''} */}
            </span>{' '}
            <span className={cn(stls.light, stls.perMonth)}>&#8381;/мес</span>
          </span>
          {(atProfession || atCourse) && (
            <span className={cn(stls.regular, { [stls.altStyles]: altStyles })}>
              <span className={stls.bold}>
                {toNumberWithSpaces(priceToMounth) || ''}
              </span>
              <span className={cn(stls.light, stls.perMonth)}>&#8381;/мес</span>
            </span>
          )}
        </div>
      )}

      <div className={stls.content}>
        <p className={cn(stls.label, { [stls.altStyles]: altStyles })}>
          Единоразовый платёж
        </p>
        <span className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
          <span className={stls.bold}>
            {!atProfession && !atCourse
              ? toNumberWithSpaces(price)
              : toNumberWithSpaces(Math.ceil(priceWithoutCeil * 0.35))}
          </span>
          {/* <span className={stls.bold}>{toNumberWithSpaces(price)}</span> */}
          {/* <span className={stls.bold}>{toNumberWithSpaces(rprice / 2)}</span> */}
          {'\u00A0'}
          <span className={stls.light}>&#8381;</span>
        </span>
        {(atProfession || atCourse) && (
          <span className={cn(stls.regular, { [stls.altStyles]: altStyles })}>
            <span className={stls.bold}>
              {toNumberWithSpaces(priceWithoutCeil)}
            </span>
            {'\u00A0'}
            <span className={stls.light}>&#8381;</span>
          </span>
        )}
      </div>
    </div>
  )
}

export default ProgramCost
