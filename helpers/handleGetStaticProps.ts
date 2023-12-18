import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'
import { TypeCategory } from '@/types/index'

type TypeHandleGetStaticProps = {
  page:
    | '/about'
    | '/contact'
    | '/index'
    | '/legal'
    | '/payment'
    | '/reviews'
    | '/teachers'
    | '/webinars'
    | '/programs'
  studyFieldSlug?: string
  slug?: string
  type?: TypeCategory
}

const handleGetStaticProps = async ({
  page,
  studyFieldSlug = null,
  slug = null,
  type = null
}: TypeHandleGetStaticProps) => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticProps}${page}`
  )

  let program = null
  if (slug) {
    const programFiltered = res.data.programs.filter(
      program =>
        program.slug === slug &&
        program.study_field?.slug === studyFieldSlug &&
        program.category?.type.toLowerCase() === type
    )[0]

    const programRes = await axios.get(
      `${routesBack.root}${routesBack.programs}/${
        programFiltered ? programFiltered.id : 'program'
      }`
    )

    // program = convertMdToHtml({
    //   arr: [programRes.data],
    //   params: [
    //     'description',
    //     'ForWhom.desc',
    //     'resumeSkills',
    //     'jobTitles',
    //     'questions'
    //   ]
    // })[0]

    program = programRes ? programRes.data : {}
  }

  return {
    props: { ...res.data, studyFieldSlug, program },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
