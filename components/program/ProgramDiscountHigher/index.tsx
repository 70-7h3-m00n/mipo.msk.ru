import stls from './index.module.sass'
import { discountNum } from '@/data/price'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { SALE_VALUE, SALE_DATE_VALUE } from '@/lib/constant'

const ProgramDiscountHigher = () => {
  return (
    <div className={stls.container}>
      <div className={cn(stls.discount)}>-{SALE_VALUE}%</div>
      <div className={cn(stls.until)}>До {SALE_DATE_VALUE}</div>
    </div>
  )
}

export default ProgramDiscountHigher
