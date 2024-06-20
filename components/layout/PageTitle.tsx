import stls from '@/styles/components/layout/PageTitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const PageTitle = ({ children }: any) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>{children}</h1>
      </Wrapper>
    </div>
  )
}

export default PageTitle
