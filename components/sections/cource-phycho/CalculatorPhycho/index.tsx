import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { useContext, useMemo, useState } from 'react'
import Title from '@/components/parts/Title'
import Image from 'next/image'
import InputRange from '@/components/parts/InputRange'

const CalculatorPhycho = () => {
  const { program } = useContext(ProgramContext)

  const [inputs, setInputs] = useState({
    consultationsPerDay: 1,
    workingDays: 1,
    pricePerConsultation: 1000
  })

  const handleInputChange = (field, value) => {
    setInputs(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const totalEarnings = useMemo(() => {
    return (
      inputs.consultationsPerDay *
      inputs.workingDays *
      inputs.pricePerConsultation
    )
  }, [inputs])

  const formattedEarnings = `${totalEarnings.toLocaleString('ru-RU')} ₽`;
  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2' color='black'>
          Сколько может зарабатывать психолог?
        </Title>

        <div className={stls.columns}>
          <div className={stls.image}>
            <Image
              src='/assets/imgs/teachers/photoPhychology.jpg'
              alt='sdsd'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className={stls.inputs}>
            <InputRange
              minText='1'
              maxText='12'
              min={1}
              value={inputs.consultationsPerDay}
              onChange={value =>
                handleInputChange('consultationsPerDay', value)
              }
              max={12}
              title='Количество консультаций в день'
            />
            <InputRange
              minText='1'
              maxText='31'
              min={1}
              value={inputs.workingDays}
              onChange={value => handleInputChange('workingDays', value)}
              max={31}
              title='Количество рабочих дней в месяц'
            />
            <InputRange
              minText='1 000 ₽'
              maxText='5 000 ₽'
              min={1000}
              max={5000}
              value={inputs.pricePerConsultation}
              onChange={value =>
                handleInputChange('pricePerConsultation', value)
              }
              step={1000}
              title='Стоимость одной консультации'
            />
            <div className={stls.prieBlock}>
              <div>
                Вы сможете зарабатывать в месяц на психологических консультациях
              </div>
              <span className={stls.price}>{formattedEarnings}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default CalculatorPhycho
