import UniversalButton from '@/components/btns/UniversalButton'
import Title from '@/components/parts/Title'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import stls from './index.module.sass'
import { PopupCta } from '@/components/popups'

interface Props {
  image?: string
  textColor?: 'white' | 'black'
  backGroundColor?: string
  buttonColor?: 'white' | 'blue'
}

const BlockDoubtingYourScores = ({
  image = '/assets/imgs/hardereducation/circleImage.jpg',
  textColor = 'white',
  backGroundColor,
  buttonColor = 'blue'
}: Props) => {
  const styleRoot = { backgroundColor: backGroundColor || 'transparent' }

  return (
    <div className={stls.component} style={styleRoot}>
      <div>
        <div className={stls.circleImage}>
          <Image src={image} alt='Картинка с девушкой' layout='fill' />
        </div>
        <div className={stls.textBlock}>
          <Title color={textColor} fontSize={44} className={stls.title}>
            Сомневаешься в своих баллах?
          </Title>
          <p className={stls[textColor]}>
            Сомневаешься в своих баллах? Оцени свои шансы на поступление и узнай
            проходной балл!
          </p>
        </div>
      </div>
      <Popup
        trigger={
          <UniversalButton
            colorText={buttonColor === 'white' ? 'black' : 'white'}
            bgColor={buttonColor === 'white' ? 'white' : 'blue'}
            className={stls.btn}>
            Узнать
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
  )
}

export default BlockDoubtingYourScores
