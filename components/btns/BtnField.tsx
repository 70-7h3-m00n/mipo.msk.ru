import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import ProgramContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

const BtnField = ({ href, aside = false, slug = null, children }) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  const { curProgramsStudyFieldSlug } = useContext(ProgramContext)

  const isPhychology = !!(
    children ===
    'Практическая Психология Premium + большее количество часов практики'
  )

  return (
    <Link href={href}>
      <a
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
        {isPhychology && (
          <Image src='/assets/imgs/icons/psy-icon.svg' alt='phyLogo' width={10} height={10}/>
        )}
        {children}
      </a>
    </Link>
  )
}

export default BtnField
