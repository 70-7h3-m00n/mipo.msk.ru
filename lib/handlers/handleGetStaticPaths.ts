import { TypeGeneralRoutesFront, TypePageProgramsPaths } from '@/types/index'
import { routesFront, fallback } from '@/config/index'
import { getStaticPathsPagePrograms } from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypeHandleGetStaticPathsProps): Promise<{
  paths: TypePageProgramsPaths | []
  fallback: boolean | 'blocking'
}> => {
  try {
    switch (page) {
      case routesFront.programs:
        return await getStaticPathsPagePrograms()

      default:
        return {
          paths: [],
          fallback: fallback.default
        }
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: fallback.default
    }
  }
}

export default handleGetStaticPaths
