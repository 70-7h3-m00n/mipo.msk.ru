import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgResume1 } from '@/components/imgs'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { toNumberWithSpaces } from '@/helpers/index'

const YourResume = () => {
  const { program } = useContext(ProgramContext)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше резюме после обучения</h2>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.img}>
              <ImgResume1 />
            </div>
            <div className={stls.headings}>
              <div className={stls.heading}>
                <p className={stls.p}>Профессия:</p>
                <h3 className={stls.h3}>{program?.resumeTitle}</h3>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Зарплата от:</p>
                <h3 className={stls.h3}>
                  {toNumberWithSpaces(program?.entrySalary || 0)} р
                </h3>
              </div>
            </div>
          </div>
          <ul className={stls.resumeSkills}>
            {program?.resumeSkills &&
              program?.resumeSkills.map(({ skill }, idx) => (
                <li key={skill + idx} className={stls.skill}>
                  <p className={stls.skillText}>{skill}</p>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResume
