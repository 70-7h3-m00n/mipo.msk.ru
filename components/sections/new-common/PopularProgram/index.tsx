import stls from './index.module.sass'
import { TPropClassNames } from '@/types/index'
import React, { useContext, useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { PopupImage } from '@/components/popups'
import { ImgCertificate, ImgDiplomaTemplate } from '@/components/imgs'
import { IconGeneralCircleCheckAlt } from '@/components/icons'
import programsContext from '@/context/programs/programsContext'
import CardWithiImage from '@/components/cards/CardWithImage'
import CardWithoutImage from '@/components/cards/CardWithoutImage'
import UniversalButton from '@/components/btns/UniversalButton'

type TSectionYourDiplomasAlt = TPropClassNames

const PopularProgram = ({ classNames }: TSectionYourDiplomasAlt) => {
  const dataFromContext = useContext(programsContext)

  const [activeTab, setActiveTab] = useState<number>(1)

  const data = [
    {
      title: 'Часто выбирают',
      programs: dataFromContext.professions.filter(program =>
        [
          'promyshlennoe-i-grazhdanskoe-stroitelstvo',
          'smm-speczialist-c-nulya-do-middle',
          'internet-marketing-1',
          'psihologiya-1',
          'graficheskij-dizajner-s-nulya-do-pro',
          'buhgalter-s-nulya'
        ].includes(program.slug)
      )
    },
    {
      title: 'Сменить профессию',
      programs: dataFromContext.professions.filter(program =>
        [
          'inzhener-pto-1',
          'inzhener-konstruktor-1',
          'polnoe-pogruzhenie-v-professiyu-internet-marketolog',
          'direktor-po-marketingu-1',
          'professiya-speczialist-po-trafiku',
          'professiya-seo-speczialist-ot-junior-do-middle',
          'brend-menedzhment-1'
        ].includes(program.slug)
      )
    },
    {
      title: 'Для руководителей',
      programs: dataFromContext.professions.filter(program =>
        [
          'proektirovanie-zdanij-i-sooruzhenij-pzs',
          'stroitelnyj-kontrol-i-upravlenie-kachestvom-v-stroitelstve-1',
          'dogovornoe-pravo',
          'rieltor',
          'upravlenie-proektami',
          'glavnyj-buhgalter'
        ].includes(program.slug)
      )
    },
    {
      title: 'Освоить новое',
      programs: dataFromContext.professions.filter(program =>
        [
          'professiya-landshaftnyj-dizajner',
          'graficheskij-dizajner-s-nulya-do-pro',
          'psihologicheskoe-konsultirovanie-i-psihodiagnostika',
          'seksologiya-v-psihologicheskom-konsultirovanii',
          'sdelki-s-nedvizhimostyu',
          'smetnoe-delo-i-czenoobrazovanie-v-stroitelstve'
        ].includes(program.slug)
      )
    }
  ]

  return (
    <div className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div>
          <div className={stls.tabsblock}>
            {data.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={activeTab == index + 1 && stls.active}
                  onClick={() => setActiveTab(index + 1)}>
                  {elem.title}
                </div>
              )
            })}
          </div>
          <div className={stls.innerTabBlock}>
            {data[activeTab - 1].programs.map((elem, idx) => (
              <CardWithoutImage
                key={idx}
                title={elem.title}
                lintTo={`/professions/${elem.study_field.slug}/${elem.slug}`}
                className={stls.card}
              />
            ))}
          </div>
        </div>
        <UniversalButton
          linkTo='/professions'
          colorText='#2663F0'
          borderColor='blue'
          borderPx={1}
          className={stls.btn}>
          Смотреть все программы
        </UniversalButton>
      </Wrapper>
    </div>
  )
}

export default PopularProgram
