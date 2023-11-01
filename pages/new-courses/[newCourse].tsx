import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PagesNewProgram from '@/components/pages/PagesNewProgram'

const NewCoursePage: NextPage = ({}) => {

  return (
    <>
      <PagesNewProgram />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug, studyFieldSlug } }) => {
  return {
    props: {
      test: []
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          newCourse: 'test',
        },
      }
    ],
    fallback: true
  }
}

export default NewCoursePage
