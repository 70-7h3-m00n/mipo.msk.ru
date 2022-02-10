import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discountNum, until } from '@/data/price'
import classNames from 'classnames'
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
          className={classNames({
            [stls.container]: true,
            [stls.small]: small
          })}>
          <p className={stls.discount}>{elDiscount}</p>
          <p className={stls.until}>{until}</p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
