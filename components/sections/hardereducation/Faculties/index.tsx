import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Image from 'next/image'
import ProgramLabel from '@/components/program/ProgramLabel'
import Title from '@/components/parts/Title'
import UniversalButton from '@/components/btns/UniversalButton'
import PopupTrigger from '@/components/general/PopupTrigger'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import BlockDiploma from '@/components/sections/hardereducation/BlockDiploma'
import FactoidWithIcon from '@/components/parts/FactoidWithIcon'
import FactoidWithoutIcon from '@/components/parts/FactoidWithoutIcon'
import CardWithiImage from '@/components/cards/CardWithImage'
import { useEducation } from '@/context/highereducation/EducationContext'

const Faculties = () => {
  const { facultets, programs } = useEducation()

  return (
    <section className={stls.component}>
      <Wrapper>
        <Title as='h2' fontSize={44}>
          Факультеты
        </Title>

        <div className={stls.cards}>
          {facultets.map(item => (
            <CardWithiImage
              key={item.id}
              lintTo='/'
              title={item.name}
              imageSrc={item.image[0].url}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Faculties
