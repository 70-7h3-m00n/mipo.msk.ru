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
import ProgramInfoAlt from '@/components/program/ProgramInfoAlt'
import UniversalProgramInfo from '@/components/program/UniversalProgramInfo'

interface Props {
  name?: string
}
const HeroSectionFacultet = ({ name = 'Все факультеты' }: Props) => {
  return (
    <section className={stls.component}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.image}>
          <Image
            src='/assets/imgs/hardereducation/logofullsize.svg'
            alt='logomipo'
            layout='fill'
          />
        </div>
        <div className={stls.content}>
          <div>
            <ProgramLabel
              className={stls.label}
              text='Обучение удаленно'
              color='black'
              bgColor='white'
            />

            <Title className={stls.title} as='h1' color='white' fontSize={60}>
              {name ? `Факультет ${name}` : name}
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
          </div>
          <div className={stls.imageBlock}>
            <div className={stls.imageWrapper}>
              <Image
                src='/assets/imgs/hardereducation/universalpicturefacultet.jpg'
                alt='logomipo'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroSectionFacultet
