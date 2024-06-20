import stls from '@/styles/components/btns/BtnEpsilon.module.sass'
import cn from 'classnames'

const BtnEpsilon = ({ text = '' }) => {

  return (
    <button className={cn(stls.container)}>
      {text}
    </button>
  )
}

export default BtnEpsilon
