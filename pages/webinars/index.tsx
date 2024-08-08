import getData, { PagesData } from '@/services/getData'

const Webinars = () => {
  return (
    <>
      webinars
    </>
  )
}

export const getStaticProps = getData(PagesData.webinars)

export default Webinars
