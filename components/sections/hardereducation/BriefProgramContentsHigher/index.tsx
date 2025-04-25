import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramModulesHigher from '../ProgramModulesHigher'
import FormSimpleBlock from '@/components/forms/FormSimpleBlock'
import UniversalButton from '@/components/btns/UniversalButton'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import Image from 'next/image'
import Title from '@/components/parts/Title'

const BriefProgramContentsHigher = () => {
  return (
    <section className={cn(stls.container)} id='program'>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={cn(stls.top)}>
          <div className={cn(stls.heading)}>
            <h2 className={cn(stls.title)}>Программа обучения - 4 года</h2>
          </div>
          <div className={cn(stls.qty)}></div>
        </div>
        <ProgramModulesHigher />
      </Wrapper>
      <Wrapper classNames={[stls.wrapperForForm]}>
        <div className={stls.componentForm}>
          <div>
            <div className={stls.circleImage}>
              <Image
                src='/assets/imgs/hardereducation/bunesmanwoman.jpg'
                alt='Картинка с девушкой'
                layout='fill'
              />
            </div>
            <div className={stls.textBlock}>
              <Title fontSize={44} className={stls.title}>
                Изучите программу подробнее - скачайте учебный план
              </Title>
            </div>
          </div>
          <Popup
            trigger={
              <UniversalButton
                colorText='white'
                bgColor='blue'
                className={stls.btn}>
                Скачать учебный план
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
      </Wrapper>
    </section>
  )
}

export default BriefProgramContentsHigher
