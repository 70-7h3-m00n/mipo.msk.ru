import stls from '@/styles/components/sections/all/HowProcessGoes.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import { ListHowProcessGoes } from '@/components/lists'
import GetDiplomaAndAccreditation from '@/components/general/GetDiplomaAndAccreditation'

const HowProcessGoes = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns classNames={[stls.twoColumns]}>
          <div className={stls.heading}>
            <h2 className={stls.title}>Как проходит обучение</h2>
            <p className={stls.subtitle}>
              Обучение осуществляется по заочной форме с применением
              дистанционных* технологий. Лекции, общение, тестирование проходят
              в онлайн формате через образовательную платформу
            </p>
          </div>
          <ListHowProcessGoes classNames={[stls.list]} />
        </TwoColumns>
        <GetDiplomaAndAccreditation />
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
