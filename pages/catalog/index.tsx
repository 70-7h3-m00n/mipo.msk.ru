import CatalogCourses from '../../src/components/pages/CatalogCourses'
import getData, { PagesData } from '../../src/services/getData'

const CatalogPage = () => {

  return (
    <>
      <CatalogCourses />
    </>
  )
}

export const getStaticProps = getData(PagesData.catalog)

export default CatalogPage
