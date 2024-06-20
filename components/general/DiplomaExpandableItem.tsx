import stls from '@/styles/components/general/DiplomaExpandableItem.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import { IconDoc, IconMinus, IconPlus } from '@/components/icons'
import { PopupImage } from '@/components/popups'

const DiplomaExpandableItem = ({ title, diplomas, idx }: any) => {
  const [isOpen, setOpen] = useState(idx === 0 ? true : false)

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <button className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div>
        <p className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}>
          {title}
        </p>
      </button>
      <div className={stls.diplomas}>
        <ul className={stls.list}>
          {diplomas &&
            diplomas.map((diploma: any, idx: number) => (
              <li key={diploma.title + idx} className={stls.item}>
                <Popup
                  trigger={
                    <button className={stls.trigger}>
                      <div className={stls.img}>{diploma.image}</div>
                      <div className={stls.label}>
                        <div className={stls.labelIcon}>
                          <IconDoc />
                        </div>
                        <span className={stls.diplomaTitle}>
                          {diploma.title}
                        </span>
                      </div>
                    </button>
                  }
                  modal
                  nested>
                </Popup>
              </li>
            ))}
        </ul>
      </div>
    </li>
  )
}

export default DiplomaExpandableItem
