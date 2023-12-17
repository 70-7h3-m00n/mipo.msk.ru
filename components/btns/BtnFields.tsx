import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import StudyFields from '@/components/general/StudyFields'
import { useRouter } from 'next/router'

const BtnFields = () => {
  const router = useRouter()
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])

  const redirectHeader = router.asPath.includes('new-courses')

  return (
    <div id='btnFieldsContainer' className={stls.container}>
      <button className={stls.btn}
              onClick={toggleFieldsTooltip}
              style={{borderColor: redirectHeader? 'black' : ''}}
      >
        <div className={stls.icon}>
          <IconMenu />
        </div>

        <span className={stls.text}
              style={{color: redirectHeader? 'black' : ''}}>
          Направления обучения
        </span>
      </button>
      <div
        className={classNames({
          [stls.tooltip]: true,
          [stls.isShown]: fieldsTooltipIsOpen
        })}>
        <StudyFields />
      </div>
    </div>
  )
}

export default BtnFields
