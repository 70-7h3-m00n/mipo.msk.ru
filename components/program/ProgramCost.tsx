import stls from '@/styles/components/program/ProgramCost.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'

const ProgramCost = ({ withPerMonth = false }) => {
  const { program } = useContext(ProgramContext)

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

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          <p className={stls.label}>Беспроцентная рассрочка на 12 месяцев</p>
          <span className={stls.discount}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthPrice) || ''}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>
          <span className={stls.regular}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthRPrice) || ''}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>
        </div>
      )}
      <div className={stls.content}>
        <p className={stls.label}>Единоразовый платёж</p>
        <span className={stls.discount}>
          <span className={stls.bold}>{toNumberWithSpaces(price)}</span>{' '}
          <span className={stls.light}>&#8381;</span>
        </span>
        <span className={stls.regular}>
          <span className={stls.bold}>{toNumberWithSpaces(rprice)}</span>{' '}
          <span className={stls.light}>&#8381;</span>
        </span>
      </div>
    </div>
  )
}

export default ProgramCost
