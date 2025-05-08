import stls from './index.module.sass'
import IconSearchForInput from '@/components/icons/IconSearchForInput'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import cn from 'classnames'
import programsContext from '@/context/programs/programsContext'
import Link from 'next/link'
import generateLinkFromType from '@/helpers/generateLinkFromType'
import UniversalButton from '@/components/btns/UniversalButton'
import { useRouter } from 'next/router'

interface Props {
  className?: string
}

const SearchOfHeaderInput = ({className}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')
  const route = useRouter()
  const data = useContext(programsContext)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  const dataForSearch = useMemo(() => {
    const generalData = [...data.courses, ...data.programs, ...data.mbas]

    if (inputText)
      return generalData.filter(elem =>
        elem.title.toLowerCase().includes(inputText.toLowerCase())
      )
    return generalData
  }, [inputText, data.courses, data.programs, data.mbas])

  useEffect(() => {
    const checkClickToMenu = (event: MouseEvent): void => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
      }
    }

    window.addEventListener('click', checkClickToMenu)

    return () => {
      window.removeEventListener('click', checkClickToMenu)
    }
  }, [])

  useEffect(() => setInputText(''), [route.asPath])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value)
  }

  return (
    <div ref={wrapperRef} className={cn(stls.wrapper)}>
      <div
        className={cn(stls.component, isFocused && stls['active'], className)}
        ref={inputRef}>
        <input
          type='text'
          id='searchInput'
          value={inputText}
          onChange={onChange}
          className={stls.inputField}
          placeholder='Введите запрос'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        />

        <IconSearchForInput />
      </div>
      <div className={cn(stls.openMenu, isFocused && stls['active'])}>
        {dataForSearch.length > 0 ? (
          dataForSearch.map(
            (elem, idx) =>
              idx <= 5 && (
                <Link
                  key={idx}
                  href={`/${generateLinkFromType(elem.category.type)}/${
                    elem.study_field.slug
                  }/${elem.slug}`}>
                  <a>{elem.title}</a>
                </Link>
              )
          )
        ) : (
          <div>
            <div>К сожалению мы не нашли таких программ</div>
            <UniversalButton
              className={stls.button}
              linkTo='/professions'
              colorText='#0072E5'
              borderPx={1}
              borderColor='blue'>
              Смотреть все
            </UniversalButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchOfHeaderInput
