import stls from '@/styles/components/btns/BtnProgramsField.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { IconMoreThan } from '@/components/icons'
import PopupFields from '@/components/popups/PopupFields'

const BtnProgramsField = ({ ofType = null }) => {
  const { studyFields, curProgramsStudyFieldSlug } = useContext<any>(ProgramsContext)

  const [isOpen, setIsOpen] = useState(false)

  const handleFieldsPopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={stls.container}>
      <button className={stls.btn} onClick={handleFieldsPopup}>
        <span>
          {!curProgramsStudyFieldSlug
            ? 'Все направления'
            : studyFields.map((studyField: any) =>
                studyField.slug === curProgramsStudyFieldSlug
                  ? studyField.label
                  : ''
              )}
        </span>
        <IconMoreThan ctheta />
      </button>
      <div
        className={classNames({
          [stls.popup]: true,
          [stls.isOpen]: isOpen
        })}>
        <PopupFields close={handleFieldsPopup} ofType={ofType} />
      </div>
    </div>
  )
}

export default BtnProgramsField
