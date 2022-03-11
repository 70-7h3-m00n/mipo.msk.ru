import {
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { fallback } from '@/config/index'

const getStaticPathsPagePrograms = async (): Promise<{
  paths: TypePageProgramsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageProgramsPathsQuery>({
    query: gql`
      query getStaticPathsPagePrograms($type: String!) {
        programs: products(where: { category: { type: $type } }) {
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.programs?.map(program => ({
          params: {
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { slug: 'program' } }],
    fallback: fallback.default
  }
}

export default getStaticPathsPagePrograms
