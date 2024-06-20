import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import ProgramContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import classNames from 'classnames'

const BtnField = ({ href, aside = false, slug = null, children }) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  const { curProgramsStudyFieldSlug } = useContext(ProgramContext)

  return (
    <Link href={href}
        className={classNames({
          [stls.container]: true,
          [stls.tooltip]: !aside,
          [stls.aside]: aside,
          [stls.active]:
            aside &&
            (slug === curProgramsStudyFieldSlug ||
              (!slug && !curProgramsStudyFieldSlug))
        })}
        onClick={!aside && closeFieldsTooltip}>
        {children}
    </Link>
  )
}

export default BtnField
