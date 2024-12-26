import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import StudyFields from '@/components/general/StudyFields'
import { useRouter } from 'next/router'

interface Props {
  isForPhychology?: boolean
}
const BtnFields = ({ isForPhychology = false }: Props) => {
  const router = useRouter()
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])

  const redirectHeader = router.asPath.includes('new-courses')
  const colorBorderForPhychoPage = isForPhychology ? '#C8C0CE' : ''

  return (
    <div id='btnFieldsContainer' className={stls.container}>
      <button
        className={stls.btn}
        onClick={toggleFieldsTooltip}
        style={{
          borderColor: redirectHeader ? 'black' : colorBorderForPhychoPage
        }}>
        <div className={stls.icon}>
          <IconMenu isForPhychology={isForPhychology} />
        </div>

        <span
          className={stls.text}
          style={{ color: redirectHeader || isForPhychology ? 'black' : '' }}>
          Направления обучения
        </span>
      </button>
      <div
        className={classNames(
          stls.tooltip,
          fieldsTooltipIsOpen && stls.isShown
        )}>
        <StudyFields />
      </div>
    </div>
  )
}

export default BtnFields
