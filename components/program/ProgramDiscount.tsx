import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discountNum, until } from '@/data/price'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

type TypeProgramDiscount = {
  small?: boolean
  textOnly?: boolean
}

const ProgramDiscount = ({
  small = null,
  textOnly = null
}: TypeProgramDiscount) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  const elDiscount = program?.timenprice && (
    <>
      {program?.timenprice?.[0]?.discount
        ? `-${program.timenprice[0].discount}%`
        : discountNum}
    </>
  )

  return (
    <>
      {textOnly ? (
        elDiscount
      ) : (
        <div
          className={cn({
            [stls.container]: true,
            [stls.small]: small,
            [stls.atMba]: atMba
          })}>
          <p className={cn(stls.discount, { [stls.atMba]: atMba })}>
            {elDiscount}
          </p>
          <p className={cn(stls.until, { [stls.atMba]: atMba })}>{until}</p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
