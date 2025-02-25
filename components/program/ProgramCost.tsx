import stls from '@/styles/components/program/ProgramCost.module.sass'
import cn from 'classnames'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'
import roundingUpPriceOrNumber from '@/helpers/roundingUpPriceOrNumber'

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

  let priceWithoutCeil = roundingUpPriceOrNumber((price / (100 - discount)) * 100)
  priceWithoutCeil = roundingUpPriceOrNumber(priceWithoutCeil * 1.17 * 1.69)
  const priceToMounth = roundingUpPriceOrNumber(priceWithoutCeil / 12)
  const salePrice = toNumberWithSpaces(roundingUpPriceOrNumber(priceToMounth * 0.35))

  let fullPriceWithSale = roundingUpPriceOrNumber(priceWithoutCeil * 0.35);

  let priceToMounthWithSale = roundingUpPriceOrNumber(priceToMounth * 0.35);
  
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
                ? toNumberWithSpaces(roundingUpPriceOrNumber(fullPriceWithSale / 12))
                : toNumberWithSpaces(roundingUpPriceOrNumber(priceToMounthWithSale)) || ''}
            </span>{' '}
            <span className={cn(stls.light, stls.perMonth)}>&#8381;/мес</span>
          </span>
          {(atProfession || atCourse) && (
            <span className={cn(stls.regular, { [stls.altStyles]: altStyles })}>
              <span className={stls.bold}>
                {toNumberWithSpaces(Math.round(fullPriceWithSale / 55 * 100 / 12)) || ''}
              </span>
              <span className={cn(stls.light, stls.perMonth)}>&#8381;/мес</span>
            </span>
          )}
        </div>
      )}

      <div className={stls.content}>
        <p className={cn(stls.label, { [stls.altStyles]: altStyles })}>
          Единоразовый платёж (со скидкой)
        </p>
        <span className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
          <span className={stls.bold}>
            {!atProfession && !atCourse
              ? toNumberWithSpaces(price)
              : toNumberWithSpaces(fullPriceWithSale)}
          </span>
          {/* <span className={stls.bold}>{toNumberWithSpaces(price)}</span> */}
          {/* <span className={stls.bold}>{toNumberWithSpaces(rprice / 2)}</span> */}
          {'\u00A0'}
          <span className={stls.light}>&#8381;</span>
        </span>
        {(atProfession || atCourse) && (
          <span className={cn(stls.regular, { [stls.altStyles]: altStyles })}>
            <span className={stls.bold}>
              {toNumberWithSpaces(Math.round(fullPriceWithSale / 55 * 100))}
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