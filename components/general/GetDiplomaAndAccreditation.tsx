import stls from '@/styles/components/general/GetDiplomaAndAccreditation.module.sass'
import { useState, useContext } from 'react'
import ProgramContext from '@/context/program/programContext'
import { BtnIota, BtnKappa } from '@/components/btns'
import {
  ImgDiplomaTemplate,
  ImgDiploma,
  ImgCertificate,
  ImgSupplement,
  ImgSupplementBack,
  ImgDiplomaInternational
} from '@/components/imgs'

const GetDiplomaAndAccreditation = () => {
  const [isSupplement, setIsSupplement] = useState(false)
  const { program } = useContext(ProgramContext)

  const atProfession = program?.category?.type === 'profession'

  return (
    <div className={stls.container}>
      <div className={stls.laptopdesktop}>
        <h3 className={stls.title}>Получаете диплом</h3>
        <p className={stls.subtitle}>
          Все наши дипломы являются установленного образца Министерством
          образования и вносятся в федеральный реестр ФИС-ФРДО
        </p>
      </div>
      <div className={stls.btns}>
        {isSupplement ? (
          <>
            <BtnKappa
              classNames={[stls.btn, stls.btn1]}
              onClick={() => setIsSupplement(false)}>
              {atProfession ? (
                'Диплом о квалификации'
              ) : (
                <>Первая&nbsp;страница</>
              )}
            </BtnKappa>
            <BtnIota
              classNames={[stls.btn, stls.btn2]}
              onClick={() => setIsSupplement(true)}>
              {atProfession ? 'Международный диплом ID' : 'Сапплемент'}
            </BtnIota>
          </>
        ) : (
          <>
            <BtnIota
              classNames={[stls.btn, stls.btn1]}
              onClick={() => setIsSupplement(false)}>
              {atProfession ? (
                'Диплом о квалификации'
              ) : (
                <>Первая&nbsp;страница</>
              )}
            </BtnIota>
            <BtnKappa
              classNames={[stls.btn, stls.btn2]}
              onClick={() => setIsSupplement(true)}>
              {atProfession ? 'Международный диплом ID' : 'Сапплемент'}
            </BtnKappa>
          </>
        )}
      </div>
      <div className={stls.diplomas}>
        {isSupplement ? (
          <>
            {atProfession ? (
              <>
                <ImgDiplomaInternational
                  classNames={[stls.diploma, stls.diploma1]}
                />
              </>
            ) : (
              <>
                <ImgSupplement classNames={[stls.diploma, stls.diploma1]} />
                <ImgSupplementBack classNames={[stls.diploma, stls.diploma2]} />
              </>
            )}
          </>
        ) : (
          <>
            <ImgDiplomaTemplate classNames={[stls.diploma, stls.diploma1]} />
            <ImgCertificate classNames={[stls.diploma, stls.diploma2]} />
          </>
        )}
      </div>
    </div>
  )
}

export default GetDiplomaAndAccreditation
