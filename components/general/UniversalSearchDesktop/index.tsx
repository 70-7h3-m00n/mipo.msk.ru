import stls from './index.module.sass'
import { IconSearchAlt } from '@/components/icons'

interface Props {
  onInput: ((e: React.FormEvent<HTMLInputElement>) => void) | (() => void)
}

const UniversalSearchDesktop = ({ onInput }: Props) => {
  return (
    <div className={stls.container}>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Поиск программы'
        className={stls.input}
        onInput={onInput}
      />
      <div className={stls.icon}>
        <IconSearchAlt />
      </div>
    </div>
  )
}

export default UniversalSearchDesktop
