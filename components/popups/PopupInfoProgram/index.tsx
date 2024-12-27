import stls from './index.module.sass'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'
import { BtnClose } from '@/components/btns'
import { IconGeneralCircleCheckAlt } from '@/components/icons'

const PopupInfoProgram = ({ close, title, info, program: listProgram }) => {
  const { program } = useContext(ProgramContext)

  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>{title}</h3>
      {info && (
        <ul className={stls.info}>
          {info.map((elem, index) => (
            <li key={index}>
              <IconGeneralCircleCheckAlt color1='#AC94F4' color2='#FFF' />{' '}
              {elem}
            </li>
          ))}
        </ul>
      )}
      {listProgram && (
        <>
          <h3>Программа курса</h3>
          <ul className={stls.listProgram}>
            {listProgram.map((elem, index) =>
              elem.text ? (
                <li key={index}>
                  {`${index + 1}. ${elem.text}`}
                  <span className={stls.time}>{elem.time}</span>
                </li>
              ) : (
                <li key={index}>{`${index + 1}. ${elem}`}</li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  )
}

export default PopupInfoProgram
