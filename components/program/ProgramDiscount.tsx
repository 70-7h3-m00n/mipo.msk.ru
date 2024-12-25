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
          <p className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
            {/* {elDiscount} */}
            -65%
          </p>
          <p className={cn(stls.until, { [stls.altStyles]: altStyles })}>
            {/* <ProgramDiscountUntil /> */}
            До 23 декабря
          </p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
