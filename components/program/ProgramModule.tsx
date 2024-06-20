import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState, useContext } from 'react'
import cn from 'classnames'


const ProgramModule = ({ title, ShortContentsDescs }: any) => {
  const [isOpen, setOpen] = useState(false)


  return (
    <li className={cn({ [stls.container]: true, [stls.isOpen]: isOpen })}>

    </li>
  )
}

export default ProgramModule
