import { GetStaticPaths, GetStaticProps } from 'next'
import AreasStudy from '../../../src/components/pages/AreasStudy'

const FilterPrograms = () => {
  return (
    <>
      <AreasStudy />
    </>
  )
}

export const getStaticProps = (async (context) => {
  return {
    props: {

    }
  }
}) satisfies GetStaticProps

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slugFilterPrograms: 'test',
        }
      },
      {
        params: {
          slugFilterPrograms: 'one',
        }
      },
    ],
    fallback: false,
  }
}) satisfies GetStaticPaths

export default FilterPrograms
