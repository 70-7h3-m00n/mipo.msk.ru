import stls from '@/styles/components/btns/BtnEta.module.sass'
import cn from 'classnames'

const BtnEta = ({ text = '' }) => {

  return (
    <button className={cn(stls.container)}>
      {text}
    </button>
  )
}

export default BtnEta
