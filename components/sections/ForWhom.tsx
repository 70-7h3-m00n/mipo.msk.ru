import stls from '@/styles/components/sections/ForWhom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  IconGettingup,
  IconRemoteWork,
  IconToTheMoon
} from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import parse from 'html-react-parser'
import marked from 'marked'

const ForWhom = () => {
  const {
    program: { forWhom }
  } = useContext(ProgramContext)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Для кого программа</h2>
        <p className={stls.subtitle}>
          Программа точно подойдет тем, кто хочет:
        </p>
        <ul className={stls.list}>
          {forWhom &&
            forWhom.map(({ title, desc }, idx) => (
              <li key={title + idx} className={stls.item}>
                <div className={stls.icon}>
                  {idx === 0 ? (
                    <IconToTheMoon />
                  ) : idx === 1 ? (
                    <IconRemoteWork />
                  ) : (
                    <IconGettingup />
                  )}
                </div>
                <p className={stls.p}>{parse(marked(title))}</p>
                <p className={stls.p}>{parse(marked(desc))}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default ForWhom
