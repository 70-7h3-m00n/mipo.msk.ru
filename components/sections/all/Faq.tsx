import stls from '@/styles/components/sections/all/Faq.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import PopupTrigger from '@/components/general/PopupTrigger'

interface Props {
  isForPhychology?: boolean
}

const Faq = ({ isForPhychology = false }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const data = program?.questions || [
    {
      question: 'Как проходит обучение в группах?',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      question: 'Какой график обучения? Получится ли совмещать его с работой?',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    ,
    {
      question: 'Специальная психология и дефектология',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      question: 'Как проходит обучение в группах?',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      question: 'Какой график обучения? Получится ли совмещать его с работой?',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      question: 'Специальная психология и дефектология',
      answer: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    }
  ]
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
    <section
      className={cn(
        stls.container,
        altStyles && stls.altStyles,
        isForPhychology && stls.forPhychology
      )}
      id='faq'>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2
            className={cn(
              stls.title,
              altStyles && stls.altStyles,
              isForPhychology && stls.forPhychology
            )}>
            Часто задаваемые вопросы
          </h2>
          <div
            className={cn(stls.laptopdesktop, { [stls.altStyles]: altStyles })}>
            <p
              className={cn(
                stls.p,
                altStyles && stls.altStyles,
                isForPhychology && stls.forPhychology
              )}>
              У Вас есть вопросы? Оставьте заявку! <br />И мы перезвоним Вам!
            </p>
            <PopupTrigger btn='zeta' cta='askQuestion' />
          </div>
        </div>

        <div className={stls.content}>
          <ul className={stls.list}>
            {data &&
              data.map(({ question, answer }, idx) => (
                <FaqAnswer
                  key={question + idx}
                  question={question}
                  answer={answer}
                  isForPhychology
                />
              ))}
          </ul>
          <div
            className={cn(stls.phonetablet, { [stls.altStyles]: altStyles })}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
            </p>
          </div>
        </div>
        <div className={cn(stls.phonetablet, { [stls.altStyles]: altStyles })}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
