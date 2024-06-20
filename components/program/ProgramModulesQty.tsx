import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import cn from 'classnames'

const ProgramModulesQty = () => {

  return (
    <div className={cn(stls.container,)}>

      <p className={cn(stls.text,)}>
        Тематических модулей
      </p>
    </div>
  )
}

export default ProgramModulesQty
