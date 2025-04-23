import UniversalButton from '@/components/btns/UniversalButton'
import Title from '@/components/parts/Title'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import stls from './index.module.sass'
import { PopupCta } from '@/components/popups'
import Wrapper from '@/components/layout/Wrapper'

const InformationOnDirection = () => {
  return (
    <section>
      <Wrapper>
        <div className={stls.component}>
          <div className={stls.text}>
            <Title fontSize={44}>Информация о направлении</Title>
            <p>
              Настоящий специалист по банковскому делу уверенно ориентируется на
              рынке финансовых услуг и умеет оперативно выявлять потребности
              клиентов.
            </p>
            <p>
              Навыки управления финансами можно получить только на практике,
              которая начнется у вас уже с первого курса обучения на факультете
              банковского дела.
            </p>
            <p>
              Вы сможете совмещать учебу с работой по специальности, и в
              результате не только изучите профильные банковские дисциплины, но
              и займете руководящую должность в банке уже к окончанию
              Университета.
            </p>
          </div>
          <div className={stls.imageWrapper}>
            <Image
              alt='Мужчина с ноутбуком'
              src='/assets/imgs/hardereducation/menwithlaptop.jpg'
              layout='fill'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default InformationOnDirection
