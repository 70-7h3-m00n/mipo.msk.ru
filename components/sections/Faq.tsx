import stls from '@/styles/components/sections/Faq.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import PopupTrigger from '@/components/general/PopupTrigger'

const Faq = () => {
  const { program } = useContext(ProgramContext)

  // const topics = getListItemsInnerHtml(questions)
  // const titles = getParagraphInnerHtml(questions)

  // const list =
  //   titles &&
  //   topics &&
  //   titles.map((title, idx) => ({
  //     question: title,
  //     answer: topics[idx]
  //   }))

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2 className={stls.title}>Часто задаваемые вопросы</h2>
          <div className={stls.laptopdesktop}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! <br />И мы перезвоним Вам!
            </p>
            <PopupTrigger btn='zeta' cta='askQuestion' />
          </div>
        </div>

        <div className={stls.content}>
          <ul className={stls.list}>
            {program?.questions &&
              program.questions.map(({ question, answer }, idx) => (
                <FaqAnswer
                  key={question + idx}
                  question={question}
                  answer={answer}
                />
              ))}
          </ul>
          <div className={stls.phonetablet}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
            </p>
          </div>
        </div>
        <div className={stls.phonetablet}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
