import stls from '@/styles/components/sections/general/SectionRelevantContentOnly.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionRelevantContentOnlyImages } from '@/components/imgs'

type TSectionRelevantContentOnly = TPropClassNames

const SectionRelevantContentOnly = ({
  classNames
}: TSectionRelevantContentOnly) => {
  const list = [
    'Мы постоянно проводим внутренние исследования, на основе которых обновляем наши программы',

    'При состовление программ используем опыт лучших бизнес-школ со всего мира',

    'Программа разработана специально в онлайн-формате для предпринимателей и руководителей, которые ценят свое время и хотят пройти обучение без отрыва от работы',

    'Благодаря дистанционному формату обучения, мы смогли собрать экспертов российских и зарубежных бизнес-школ'
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Только актуальный контент</h2>
        <div className={stls.left}>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li key={`${item}-${idx}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={stls.right}>
          <ImgSectionRelevantContentOnlyImages />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionRelevantContentOnly
