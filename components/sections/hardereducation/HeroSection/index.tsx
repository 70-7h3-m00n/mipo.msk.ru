import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Image from 'next/image'
import ProgramLabel from '@/components/program/ProgramLabel'
import Title from '@/components/parts/Title'
import UniversalButton from '@/components/btns/UniversalButton'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import BlockDiploma from '@/components/sections/hardereducation/BlockDiploma'

const HeroSection = () => {
  return (
    <section className={stls.component}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.image}>
          <Image
            src='/assets/imgs/hardereducation/mipowhitelogo.svg'
            alt='logomipo'
            layout='fill'
          />
        </div>
        <ProgramLabel
          className={stls.label}
          text='Обучение удаленно'
          color='black'
          bgColor='white'
        />

        <Title className={stls.title} as='h1' color='white' fontSize={60}>
          Высшее <br />
          онлайн-образование
        </Title>

        <p className={stls.description}>
          Высшее образование по востребованным профессиям онлайн
        </p>
        <div className={stls.buttons}>
          <UniversalButton idToScroll='catalog' bgColor='blue'>
            Выбрать направление
          </UniversalButton>
          <Popup
            trigger={
              <UniversalButton borderColor='white' borderPx={1}>
                Задать вопрос
              </UniversalButton>
            }
            modal
            nested>
            {close => (
              <PopupCta
                title='Оставить заявку'
                desc='Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши вопросы и решим проблему'
                cta='Отправить'
                close={close}
                question={false}
              />
            )}
          </Popup>
        </div>
        <BlockDiploma className={stls.diplomas}/>
      </Wrapper>
    </section>
  )
}

export default HeroSection
