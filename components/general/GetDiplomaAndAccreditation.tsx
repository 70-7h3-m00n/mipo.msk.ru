import stls from '@/styles/components/general/GetDiplomaAndAccreditation.module.sass'
import { useState } from 'react'
import { BtnIota, BtnKappa } from '@/components/btns'
import {
  ImgDiploma,
  ImgCertificate,
  ImgSupplement,
  ImgSupplementBack
} from '@/components/imgs'

const GetDiplomaAndAccreditation = () => {
  const [isSupplement, setIsSupplement] = useState(false)

  return (
    <div className={stls.container}>
      <div className={stls.laptopdesktop}>
        <h3 className={stls.title}>Получаете диплом с аккредитацией</h3>
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
              Первая&nbsp;страница
            </BtnKappa>
            <BtnIota
              classNames={[stls.btn, stls.btn2]}
              onClick={() => setIsSupplement(true)}>
              Сапплемент
            </BtnIota>
          </>
        ) : (
          <>
            <BtnIota
              classNames={[stls.btn, stls.btn1]}
              onClick={() => setIsSupplement(false)}>
              Первая&nbsp;страница
            </BtnIota>
            <BtnKappa
              classNames={[stls.btn, stls.btn2]}
              onClick={() => setIsSupplement(true)}>
              Сапплемент
            </BtnKappa>
          </>
        )}
      </div>
      <div className={stls.diplomas}>
        {isSupplement ? (
          <>
            <ImgSupplement classNames={[stls.diploma, stls.diploma1]} />
            <ImgSupplementBack classNames={[stls.diploma, stls.diploma2]} />
          </>
        ) : (
          <>
            <ImgDiploma classNames={[stls.diploma, stls.diploma1]} />
            <ImgCertificate classNames={[stls.diploma, stls.diploma2]} />
          </>
        )}
      </div>
    </div>
  )
}

export default GetDiplomaAndAccreditation
