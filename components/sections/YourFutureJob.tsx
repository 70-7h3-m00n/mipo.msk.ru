import stls from '@/styles/components/sections/YourFutureJob.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  ImgCourse2,
  ImgDecoration1,
  ImgDecoration2,
  ImgDecoration3
} from '@/components/imgs'
import { IconAtom } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const YourFutureJob = () => {
  const { program } = useContext(ProgramContext)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Кем сможете работать</h2>
        <div className={stls.content}>
          <div>
            <p className={stls.subtitle}>В результате обучения вы:</p>
            <ul className={stls.jobTitles}>
              {program?.jobTitles &&
                program?.jobTitles.map(({ title }, idx) => (
                  <li key={title + idx} className={stls.item}>
                    <p className={stls.p}>{title}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className={stls.bottom}>
            <div className={stls.icon}>
              <IconAtom calpha barelyVisible />
            </div>
            <div className={stls.decoration}>
              <div className={stls.atom}>
                <IconAtom withCircles responsive calpha barelyVisible />
              </div>
              <div className={stls.imgTopLeft}>
                <ImgDecoration1 />
              </div>
              <div className={stls.imgTopRight}>
                <ImgDecoration2 />
              </div>
              <div className={stls.imgMiddle}>
                <ImgCourse2 />
              </div>
              <div className={stls.imgBottomRight}>
                <ImgDecoration3 />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourFutureJob
