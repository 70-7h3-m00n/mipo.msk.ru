import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Image from 'next/image'
import ProgramLabel from '@/components/program/ProgramLabel'
import Title from '@/components/parts/Title'
import UniversalButton from '@/components/btns/UniversalButton'
import PopupTrigger from '@/components/general/PopupTrigger'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import BlockDiploma from '@/components/sections/hardereducation/BlockDiploma'
import FactoidWithIcon from '@/components/parts/FactoidWithIcon'
import FactoidWithoutIcon from '@/components/parts/FactoidWithoutIcon'

const Factoids = () => {
  return (
    <section className={stls.component}>
      <Wrapper>
        <div className={stls.textAndImg}>
          <div>
            <Title as='h3' fontSize={44} color='white' className={stls.title}>
              «МИПО» – это про качество образования и актуальные технологии
            </Title>
            <div className={stls.text}>
              <p>
                Инновационные подходы, уникальная исследовательская
                инфраструктура и высокий уровень преподавания обеспечивают
                лидерство в национальных рейтингах.
              </p>
              <p>
                Наша цель – сделать образование качественным и доступным. Дать
                возможность учиться из любой точки мира и участвовать в
                международных стажировках.
              </p>
            </div>
          </div>
          <div className={stls.image}>
            <Image
              src='/assets/imgs/hardereducation/manwithcompoter.jpg'
              alt='Мужчина с компьютером института МИПО'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={stls.factoidsWithIcon}>
          <FactoidWithIcon
            title='Приоритет'
            description='Требования крупнейших компаний-работодателей'
            iconSrc='/assets/imgs/hardereducation/prioriteticon.svg'
            positionCircleBorderRadius='top-left'
          />
          <FactoidWithIcon
            title='Приоритет'
            description='Требования крупнейших компаний-работодателей'
            iconSrc='/assets/imgs/hardereducation/knowledgeicon.svg'
            positionCircleBorderRadius='bottom-right'
          />
        </div>
        <div className={stls.factoidsWithoutIcon}>
          <FactoidWithoutIcon title='73' description='программы обучения'/>
          <FactoidWithoutIcon title='42 000' description='студентов'/>
          <FactoidWithoutIcon title='от 72 000' description='руб. в год обучения'/>
        </div>
      </Wrapper>
    </section>
  )
}

export default Factoids
