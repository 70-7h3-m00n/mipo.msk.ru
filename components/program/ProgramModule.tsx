import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState, useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import ProgramContext from '@/context/program/programContext'
import {
  IconCircleCheck,
  IconGeneralCircleCheckAlt,
  IconMinus,
  IconPlus
} from '@/components/icons'

const ProgramModule = ({
  title,
  ShortContentsDescs,
  isForPhychology = false
}) => {
  const [isOpen, setOpen] = useState(false)
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const isShortContentsDescs =
    ShortContentsDescs &&
    ShortContentsDescs?.filter(desc => desc?.desc).length > 0

  return (
    <li className={cn({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      {/* className={cn({ [stls.container]: true })}> */}
      <a
        className={cn(stls.title, {
          [stls.isShortContentsDescs]: isShortContentsDescs
        })}
        {...(isShortContentsDescs
          ? {
              href: '#!',
              onClick: () =>
                ShortContentsDescs &&
                ShortContentsDescs?.length > 0 &&
                setOpen(!isOpen)
            }
          : {})}>
        {/* <div className={stls.title}> */}
        {isShortContentsDescs ? (
          <div className={stls.icon}>
            {isOpen ? <IconMinus /> : <IconPlus />}
          </div>
        ) : (
          <div className={cn(stls.icon, isForPhychology && stls.forPhychology)}>
            {isForPhychology ? (
              <IconGeneralCircleCheckAlt color1='#AC94F4' />
            ) : (
              <IconCircleCheck altStyles={altStyles} />
            )}
          </div>
        )}
        <p
          className={cn(
            stls.pTitle,
            isOpen && stls.bold,
            altStyles && stls.altStyles,
            isForPhychology && stls.forPhychology
          )}>
          {/* <p className={cn({ [stls.pTitle]: true, [stls.altStyles]: altStyles })}> */}
          {title}
        </p>
        {/* </div> */}
      </a>
      <div className={stls.ShortContentsDescs}>
        {isForPhychology && (
          <p className={cn(stls.p, altStyles && stls.altStyles, stls.subtitle)}>
            В результате обучения вы:
          </p>
        )}

        <ul className={cn(stls.list, isForPhychology && stls.forPhychology)}>
          {ShortContentsDescs?.map((ShortContentsDescs, idx) => (
            <li
              key={ShortContentsDescs.desc + idx}
              className={cn(
                stls.item,
                altStyles && stls.altStyles,
                isForPhychology && stls.forPhychology
              )}>
              {ShortContentsDescs?.desc && (
                <span className={stls.p}>
                  {parse(marked(ShortContentsDescs?.desc))}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProgramModule
