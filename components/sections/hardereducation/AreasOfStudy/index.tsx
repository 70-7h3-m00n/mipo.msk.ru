import stls from './index.module.sass'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import Wrapper from '@/components/layout/Wrapper'
import Title from '@/components/parts/Title'
import { useEducation } from '@/context/highereducation/EducationContext'
import Link from 'next/link'
import CardWithoutImage from '@/components/cards/CardWithoutImage'
import UniversalSearchDesktop from '@/components/general/UniversalSearchDesktop'
import { Slider, Checkbox, FormControlLabel } from '@mui/material'

interface Props {
  nameFacultet?: string
  className?: string
}

const AreasOfStudy = ({ nameFacultet, className }: Props) => {
  const { facultets, programs } = useEducation()

  // Нужно для вычесления максимальной цены
  const maxPrice = Math.max(
    ...programs.map(program => program.timenprice?.[0]?.price)
  )

  // Объект со всеми фильтрами
  const [searchInput, setSearchInput] = useState({
    name: '',
    priceFrom: 0,
    priceTo: maxPrice,
    duration: []
  })

  // Функция для обработки ввода в поисковом поле
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    setSearchInput(prev => ({ ...prev, name: value }))
  }

  // useMemo для фильтрации программ
  const filteredFacultets = useMemo(() => {
    let filteredPrograms = programs

    if (nameFacultet && nameFacultet !== 'Все факультеты') {
      filteredPrograms = programs.filter(program =>
        program['faculties_higher_educations'].some(
          category => category.name === nameFacultet
        )
      )
    }

    if (searchInput.name) {
      filteredPrograms = programs.filter(program =>
        program.name.toLowerCase().includes(searchInput.name.toLowerCase())
      )
    }

    filteredPrograms = filteredPrograms.filter(
      program =>
        Number(program.timenprice?.[0]?.price) >=
          Number(searchInput.priceFrom) &&
        Number(program.timenprice?.[0]?.price) <= Number(searchInput.priceTo)
    )

    const parsedRanges = searchInput.duration.map(range => {
      if (range.includes('+')) {
        const min = parseInt(range)
        return { min, max: Infinity }
      } else {
        const [min, max] = range.split('-').map(Number)
        return { min, max }
      }
    })

    filteredPrograms = filteredPrograms.filter(program => {
      const durationProgram = program.timenprice[0].studyMonthsDuration
      if (!parsedRanges.length) return true
      return parsedRanges.some(range => {
        if (range.max === Infinity) {
          return durationProgram >= range.min
        } else {
          return durationProgram >= range.min && durationProgram <= range.max
        }
      })
    })

    return filteredPrograms
  }, [programs, searchInput, nameFacultet])

  // Функция для обработки изменения слайдера
  const handleChange = (event: Event, newValue: number | number[]) => {
    setSearchInput(prev => ({
      ...prev,
      priceFrom: newValue[0],
      priceTo: newValue[1]
    }))
  }

  // Значения чекбоксов
  const [stateCheckboxes, setStateCheckboxes] = useState([
    { title: '3-6 месяцев', value: '3-6', checked: false },
    { title: '6-12 месяцев', value: '6-12', checked: false },
    { title: '12-18 месяцев', value: '12-18', checked: false },
    { title: 'более 18 месяцев', value: '18+', checked: false }
  ])

  // Изменение фильтара по длительности
  const handleDurationChange = (value: string) => {
    setStateCheckboxes(prev =>
      prev.map(checkbox => {
        if (checkbox.value === value) {
          return { ...checkbox, checked: !checkbox.checked }
        }
        return checkbox
      })
    )
  }

  useEffect(() => {
    setSearchInput(prev => ({
      ...prev,
      duration: stateCheckboxes
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
    }))
  }, [stateCheckboxes])

  const onInputPrice = (
    event: FormEvent<HTMLInputElement>,
    direction: 'from' | 'to'
  ) => {
    const target = event.target as HTMLInputElement

    if (direction === 'from') {
      setSearchInput(prev => ({
        ...prev,
        priceFrom: Number(target.value)
      }))
    } else {
      setSearchInput(prev => ({
        ...prev,
        priceTo: Number(target.value)
      }))
    }
  }

  return (
    <section className={stls.component} id='catalog'>
      <Wrapper classNames={[stls.wrapper]}>
        <Title fontSize={44} as='h1' className={stls.title}>
          Направления в обучении
        </Title>
        <div className={stls.linkBlock}>
          {facultets.map(elem =>
            elem.name !== nameFacultet && nameFacultet ? (
              <Link key={elem.id} href={`/highereducation/${elem.slug}`}>
                <a className={stls.link}>{elem.name}</a>
              </Link>
            ) : (
              <span key={elem.id} className={stls.link}>
                {elem.name}
              </span>
            )
          )}
        </div>
        <div className={stls.generalInfo}>
          <UniversalSearchDesktop onInput={onInput} />

          <div>
            <Title fontSize={30} as='h2' className={stls.title}>
              {nameFacultet ? `Программы по ${nameFacultet}` : 'Все программы'}
            </Title>
          </div>
          <div className={stls.direction}>
            <span>{filteredFacultets.length}</span> направлений(я)
          </div>
        </div>
        <div className={stls.cardsWrapper}>
          <div className={stls.filter}>
            <div className={stls.text}>Стоимость обучения</div>
            <div className={stls.price}>
              <div>
                <input
                  type='number'
                  value={searchInput.priceFrom}
                  onInput={event => onInputPrice(event, 'from')}
                  max={maxPrice}
                  min={0}></input>{' '}
                -
                <input
                  type='number'
                  value={searchInput.priceTo}
                  onInput={event => onInputPrice(event, 'to')}
                  max={maxPrice}
                  min={0}></input>
              </div>
              <Slider
                value={[searchInput.priceFrom, searchInput.priceTo]}
                valueLabelDisplay='auto'
                min={0}
                max={maxPrice}
                onChange={handleChange}
                className={stls.slider}
              />
            </div>

            <div className={stls.duration}>
              <div className={stls.text}>Длительность</div>
              <div className={stls.checkboxes}>
                {stateCheckboxes.map(checkbox => (
                  <FormControlLabel
                    key={checkbox.value}
                    control={
                      <Checkbox
                        value={checkbox.value}
                        checked={checkbox.checked}
                        onChange={value =>
                          handleDurationChange(value.target.value)
                        }
                      />
                    }
                    label={checkbox.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={stls.cards}>
            {filteredFacultets.length === 0 && (
              <div className={stls.empty}>
                Нет программ, попробуйте удалить фильтр
              </div>
            )}
            {filteredFacultets.map(program => {
              return (
                <CardWithoutImage
                  key={program.id}
                  displayLabels={true}
                  title={program.name}
                  lintTo={`/highereducation/${program['faculties_higher_educations'][0].slug}/${program.slug}`}
                  {...program}
                />
              )
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default AreasOfStudy
