import stls from '@/styles/components/sections/Faq.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import PopupTrigger from '@/components/general/PopupTrigger'

const Faq = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

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
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
            Часто задаваемые вопросы
          </h2>
          <div className={cn(stls.laptopdesktop, { [stls.atMba]: atMba })}>
            <p className={cn(stls.p, { [stls.atMba]: atMba })}>
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
          <div className={cn(stls.phonetablet, { [stls.atMba]: atMba })}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
            </p>
          </div>
        </div>
        <div className={cn(stls.phonetablet, { [stls.atMba]: atMba })}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
