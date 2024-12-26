import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import { IconCircleCheck } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import Title from '@/components/parts/Title'
import IconCircleChecType2 from '@/components/icons/IconCircleChecType2'

const HowCanKnowledgeBeApplied = () => {
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'В профессиональных целях',
      list: [
        'Помогать людям добиваться целей, понять свое предназначение и обрести баланс',
        'Стать психологом частной практики, начать зарабатывать и уйти из найма',
        'Выстраивать эффективные команды, вдохновлять и мотивировать сотрудников',
        'Применять навыки психологического анализа, где важно понимание человеческого поведения'
      ]
    },
    {
      title: 'В личных целях',
      list: [
        'Обновить свои убеждения и начать жить полной жизнью',
        'Видеть возможности и использовать их для достижения результатов',
        'Построить счастливые отношения в семье и в ближнем окружении',
        'Понять свои истинные желания и создать стратегию для их достижения'
      ]
    }
  ]
  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2' color='black'>
          Как можно применять знания
        </Title>

        <div className={stls.columns}>
          {data.map((column, index) => (
            <div key={column.title + index}>
              <div className={stls.title}>{column.title}</div>
              <ul>
                {column.list.map((elem, num) => (
                  <li key={num} className={stls.listItem}>
                    <IconCircleChecType2 classNames={[stls.icon]} />
                    {elem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default HowCanKnowledgeBeApplied
