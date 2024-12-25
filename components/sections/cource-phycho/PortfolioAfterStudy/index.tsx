import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import Title from '@/components/parts/Title'
import IconCircleChecType2 from '@/components/icons/IconCircleChecType2'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import { PopupImage } from '@/components/popups'
import { ImgCertificate, ImgDiplomaInternationalMba, ImgDiplomaTemplate, ImgSupplement } from '@/components/imgs'

const PortfolioAfterStudy = () => {
  const { program } = useContext(ProgramContext)

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2' color='black'>
          Ваше портфолио после обучения
        </Title>

        <div className={stls.columns}>
          <div>
            <div className={stls.professionBlock}>
              <div className={stls.image}>
                <Image
                  src='/assets/imgs/teachers/psyhologProf.jpg'
                  alt='sdsd'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={stls.priceBlock}>
                <div>
                  <span>Психолог</span>
                  <span className={stls.price}>от 100 000 ₽</span>
                </div>
                <div>
                  <span>Профессия</span>
                  <span>Зарплата</span>
                </div>
              </div>
            </div>
            <div className={stls.line}></div>
            <div>
              <h3 className={stls.title}>
                <span>3</span>Компетенции:
              </h3>
              <ul className={stls.list}>
                <li>
                  Навык проведения индивидуального и группового консультирования
                </li>
                <li>Навык проведения групповых тренингов</li>
                <li>
                  Умение профессионально использовать современные практические
                  инструменты консультации
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className={stls.title}>
              <span>1</span>Квалификация:
            </h3>
            <p>
              Профессиональная переподготовка. Диплом Московского Института
              Профессиональной переподготовке. Программа «Семейный психолог»
            </p>
            <h3 className={stls.title}>
              <span>2</span>Диплом:
            </h3>
            <Popup
              trigger={
                <a href='#!' className={stls.diploma}>
                  <ImgDiplomaTemplate />
                </a>
              }
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {close => (
                <PopupImage
                  image={<ImgDiplomaTemplate />}
                  close={close}
                />
              )}
            </Popup>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PortfolioAfterStudy
