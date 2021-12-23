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
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'

const ForWhom = () => {
  const {
    program: { forWhom, forWhomPicture }
  } = useContext(ProgramContext)

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <div className={stls.text}>
            <h2 className={stls.title}>Для кого программа</h2>
            <p className={stls.subtitle}>
              Все наши программы сертифицированы, имеют аккредитации, а дипломы
              котируются по всему миру!
            </p>
          </div>
          <ImgForWhom
            classNames={[stls.imageLaptopDesktop]}
            src={forWhomPicture && forWhomPicture.url}
            width={forWhomPicture && forWhomPicture.width}
            height={forWhomPicture && forWhomPicture.height}
          />
          <ImgForWhomPhoneTablet
            classNames={[stls.imagePhoneTablet]}
            src={forWhomPicture && forWhomPicture.url}
            width={forWhomPicture && forWhomPicture.width}
            height={forWhomPicture && forWhomPicture.height}
          />
        </div>
        <div className={stls.right}>
          <ul className={stls.list}>
            {forWhom &&
              forWhom.map(({ title, desc }, idx) => (
                <li key={title + idx} className={stls.item}>
                  {title && (
                    <div className={stls.itemTitle}>{parse(marked(title))}</div>
                  )}
                  {desc && (
                    <div className={stls.itemDesc}>{parse(marked(desc))}</div>
                  )}
                  {forWhom[idx + 1] && <div className={stls.divider}></div>}
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhom
