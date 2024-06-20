import stls from '@/styles/components/btns/BtnTheta.module.sass'
import cn from 'classnames'

const BtnTheta = ({ text = '' }) => {

  return (
    <button className={cn(stls.container)}>
      {text}
    </button>
  )
}

export default BtnTheta
