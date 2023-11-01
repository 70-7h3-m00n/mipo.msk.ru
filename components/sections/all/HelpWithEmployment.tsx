import stls from '@/styles/components/sections/all/HelpWithEmployment.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CorporateClients from '@/components/general/CorporateClients'
import { IconCircleCheck } from '@/components/icons'

const HelpWithEmployment = () => {
  const list = [
    'Рекомендации по составлению портфолио и резюме',
    'Персональные консультации по развитию карьеры',
    'Подготовка к собеседованию в компаниях-партнёрах',
    'Помощь в поиске первых трех клиентов на частные консультации',
    'Модуль “Как зарабатывать удаленно от 80 т.р.”',
    'Симулятор собеседования'
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Помощь в трудоустройстве{' '}
          <span className={stls.titleDesktop}>и поиске клиентов</span>
        </h2>
        <ul className={stls.list}>
          {list.map((measure, idx) => (
            <li key={measure + idx} className={stls.item}>
              <IconCircleCheck calpha />
              <span className={stls.text}>{measure}</span>
            </li>
          ))}
        </ul>
        <CorporateClients />
      </Wrapper>
    </section>
  )
}

export default HelpWithEmployment
