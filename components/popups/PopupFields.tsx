import stls from '@/styles/components/popups/PopupFields.module.sass'
import { BtnClose } from '@/components/btns'
import ProgramsFilters from '@/components/layout/ProgramsFilters'

const PopupFields = ({ ofType, close }: any) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <div className={stls.filters}>
        <ProgramsFilters close={close} ofType={ofType} />
      </div>
    </div>
  )
}

export default PopupFields
