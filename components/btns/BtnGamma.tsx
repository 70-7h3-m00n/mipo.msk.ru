import stls from '@/styles/components/btns/BtnGamma.module.sass'
import cn from 'classnames'

const BtnGamma = ({ text = '' }) => {

  return (
    <button className={cn(stls.container)}>
      {text}
    </button>
  )
}

export default BtnGamma
