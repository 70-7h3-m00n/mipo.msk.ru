import stls from '@/styles/components/sections/ForWhom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import parse from 'html-react-parser'
import marked from 'marked'
import { getImageHeight } from '@/helpers/index'
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'

const ForWhom = () => {
  const { program } = useContext(ProgramContext)

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
            src={program.forWhomPicture && program.forWhomPicture.url}
            width={program.forWhomPicture?.width && 523}
            height={getImageHeight({
              width: 523,
              widthInitial: program.forWhomPicture?.width,
              heightInitial: program.forWhomPicture?.height
            })}
          />
          <ImgForWhomPhoneTablet
            classNames={[stls.imagePhoneTablet]}
            src={program.forWhomPicture && program.forWhomPicture.url}
            width={program.forWhomPicture?.width && 708}
            height={getImageHeight({
              width: 708,
              widthInitial: program.forWhomPicture?.width,
              heightInitial: program.forWhomPicture?.height
            })}
          />
        </div>
        <div className={stls.right}>
          <ul className={stls.list}>
            {program.forWhom &&
              program.forWhom.map(({ title, desc }, idx) => (
                <li key={title + idx} className={stls.item}>
                  {title && (
                    <div className={stls.itemTitle}>{parse(marked(title))}</div>
                  )}
                  {desc && (
                    <div className={stls.itemDesc}>{parse(marked(desc))}</div>
                  )}
                  {program.forWhom[idx + 1] && (
                    <div className={stls.divider}></div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhom
