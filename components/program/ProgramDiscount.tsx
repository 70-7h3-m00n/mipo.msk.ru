import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discountNum } from '@/data/price'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import ProgramDiscountUntil from './ProgramDiscountUntil'

type TypeProgramDiscount = {
  small?: boolean
  textOnly?: boolean
}

const ProgramDiscount = ({
  small = null,
  textOnly = null
}: TypeProgramDiscount) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const elDiscount =
    program?.timenprice &&
    (program?.timenprice?.[0]?.discount
      ? `-${program.timenprice[0].discount}%`
      : discountNum)

  // const elDiscount = <> -50% </>

  return (
    <>
      {textOnly ? (
        elDiscount
      ) : (
        <div
          className={cn({
            [stls.container]: true,
            [stls.small]: small,
            [stls.altStyles]: altStyles
          })}>
          <span>Скидка до</span>
          <p className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
            {/* {elDiscount} */}
            -50%
          </p>
          <p className={cn(stls.until, { [stls.altStyles]: altStyles })}>
            {/* <ProgramDiscountUntil /> */}
            До 28 февраля
          </p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
