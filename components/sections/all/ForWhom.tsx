import stls from '@/styles/components/sections/all/ForWhom.module.sass'
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
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper classNames={[cn(stls.wrapper)]}>
        <div className={cn(stls.left, { [stls.altStyles]: altStyles })}>
          <div className={cn(stls.text, { [stls.altStyles]: altStyles })}>
            <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
              Для кого программа
            </h2>
            <p className={cn(stls.subtitle, { [stls.altStyles]: altStyles })}>
              Все программы обучения института МИПО подготовлены практикующими
              экспертами и сертифицированы, а выданные документы вносятся в
              Федеральный реестр ФИС-ФРДО и котируются по всему миру!
            </p>
          </div>
          <ImgForWhom
            classNames={[
              cn(stls.imageLaptopDesktop, {
                [stls.altStyles]: altStyles,
                [stls.default]: !altStyles
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
          <ul className={cn(stls.list, { [stls.altStyles]: altStyles })}>
            {program?.forWhom &&
              program?.forWhom.map(({ title, desc }, idx) => (
                <li
                  key={title + idx}
                  className={cn(stls.item, { [stls.altStyles]: altStyles })}>
                  <div
                    className={cn(stls.itemBody, {
                      [stls.altStyles]: altStyles
                    })}>
                    {title && (
                      <div
                        className={cn(stls.itemTitle, {
                          [stls.altStyles]: altStyles
                        })}>
                        {parse(marked(title))}
                      </div>
                    )}
                    {desc && (
                      <div
                        className={cn(stls.itemDesc, {
                          [stls.altStyles]: altStyles
                        })}>
                        {parse(marked(desc))}
                      </div>
                    )}
                  </div>
                  {program?.forWhom[idx + 1] && (
                    <div
                      className={cn(stls.divider, {
                        [stls.altStyles]: altStyles
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
