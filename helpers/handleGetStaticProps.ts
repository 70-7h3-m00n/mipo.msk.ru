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
    // `${routesBack.root}${routesBack.getStaticProps}${page}`
    `${routesBack.root}${routesBack.getStaticProps}/index`
  )

  if (page == '/webinars') {
    const webinars = await axios.get(`https://api.mipo.msk.ru/webinars?_limit=-1`)
    res.data.webinars = webinars.data
  }

  if (page == '/teachers') {
    const teachers = await axios.get(
      `${routesBack.root}${routesBack.getStaticProps}/teachers`
    )
    res.data.teachers = teachers.data.teachers
  }

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

  // Получает факультеты высшего образования

  const facultets = await axios.get(
    `https://api.mipo.msk.ru/faculties-higher-educations`
  )

  return {
    props: { ...res.data, studyFieldSlug, program, facultets: facultets.data },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
