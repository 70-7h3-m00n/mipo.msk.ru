import AreasStudy from '../../src/components/pages/AreasStudy'
import getData, { PagesData } from '../../src/services/getData'


const CatalogPage = () => {

  return (
    <>
      <AreasStudy />
    </>
  )
}

export const getStaticProps = getData(PagesData.catalog)

export default CatalogPage
