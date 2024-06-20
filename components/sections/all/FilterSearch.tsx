import stls from '@/styles/components/sections/all/FilterSearch.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnProgramsField } from '@/components/btns'

const FilterSearch = ({ ofType }: any) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <BtnProgramsField ofType={ofType} />

        {/* <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnFilter />
          </div>
          <div className={stls.btn}>
            <BtnSearch />
          </div>
        </div> */}
      </Wrapper>
    </section>
  )
}

export default FilterSearch
