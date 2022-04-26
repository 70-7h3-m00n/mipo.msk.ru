import stls from '@/styles/components/sections/ForWhom.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'

const ForWhom = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper classNames={[cn(stls.wrapper)]}>
        <div className={cn(stls.left, { [stls.atMba]: atMba })}>
          <div className={cn(stls.text, { [stls.atMba]: atMba })}>
            <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
              Для кого программа
            </h2>
            <p className={cn(stls.subtitle, { [stls.atMba]: atMba })}>
              Все наши программы сертифицированы, имеют аккредитации, а дипломы
              котируются по всему миру!
            </p>
          </div>
          <ImgForWhom
            classNames={[
              cn(stls.imageLaptopDesktop, {
                [stls.atMba]: atMba,
                [stls.default]: !atMba
              })
            ]}
            src={program?.forWhomPicture?.url}
            width={program?.forWhomPicture?.width && 523}
            height={getImageHeight({
              width: 523,
              widthInitial: program?.forWhomPicture?.width,
              heightInitial: program?.forWhomPicture?.height
            })}
          />
          <ImgForWhomPhoneTablet
            classNames={[stls.imagePhoneTablet]}
            src={program?.forWhomPicture && program?.forWhomPicture?.url}
            width={program?.forWhomPicture?.width && 708}
            height={getImageHeight({
              width: 708,
              widthInitial: program?.forWhomPicture?.width,
              heightInitial: program?.forWhomPicture?.height
            })}
          />
        </div>
        <div className={stls.right}>
          <ul className={cn(stls.list, { [stls.atMba]: atMba })}>
            {program?.forWhom &&
              program?.forWhom.map(({ title, desc }, idx) => (
                <li
                  key={title + idx}
                  className={cn(stls.item, { [stls.atMba]: atMba })}>
                  <div
                    className={cn(stls.itemBody, {
                      [stls.atMba]: atMba
                    })}>
                    {title && (
                      <div
                        className={cn(stls.itemTitle, { [stls.atMba]: atMba })}>
                        {parse(marked(title))}
                      </div>
                    )}
                    {desc && (
                      <div
                        className={cn(stls.itemDesc, { [stls.atMba]: atMba })}>
                        {parse(marked(desc))}
                      </div>
                    )}
                  </div>
                  {program?.forWhom[idx + 1] && (
                    <div
                      className={cn(stls.divider, {
                        [stls.atMba]: atMba
                      })}></div>
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
