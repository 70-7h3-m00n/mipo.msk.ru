import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

const PageIdCourse = () => {
  return (
    <div>
        id
    </div>
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
          slugProgram: 'test-1',
          id: 'id-1'
        }
      },
      {
        params: {
          slugFilterPrograms: 'one',
          slugProgram: 'one-1',
          id: 'id-1'
        }
      },
    ],
    fallback: false,
  }
}) satisfies GetStaticPaths

export default PageIdCourse
