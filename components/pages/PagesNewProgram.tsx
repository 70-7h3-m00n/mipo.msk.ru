import styles from '@/styles/components/pages/PagesNewProgram.module.sass'
import HeroNewProgram from '@/components/sections/new-course/HeroNewProgram'
import CardDiscount from '@/components/cards/CardDiscount'
import DescriptionProgram from '@/components/sections/new-course/DescriptionProgram'
import VacanciesProfession from '@/components/sections/new-course/VacanciesProfession'
import WhoIsProgram from '@/components/sections/new-course/WhoIsProgram'
import WeTookCare from '@/components/sections/new-course/WeTookCare'
import Study from '@/components/sections/new-course/Study'

const PagesNewProgram = () => {
  return (
    <>
      <HeroNewProgram />
      <CardDiscount />
      <DescriptionProgram />
      <VacanciesProfession />
      <WhoIsProgram />
      <WeTookCare />
      <Study />
    </>
  )
}

export default PagesNewProgram
