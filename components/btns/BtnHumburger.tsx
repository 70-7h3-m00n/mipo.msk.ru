import stls from '@/styles/components/btns/BtnHumburger.module.sass'
import { useContext } from 'react'

import MenuContext from '@/context/menu/menuContext'
import { IconHumburger } from '@/components/icons'

interface Props {
  isForPhychology?: boolean
}
const BtnHumburger = ({ isForPhychology = false }: Props) => {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <button className={stls.container} onClick={toggleMenu} aria-label='Меню'>
      <IconHumburger color={isForPhychology ? 'black' : 'white'} />
    </button>
  )
}

export default BtnHumburger
