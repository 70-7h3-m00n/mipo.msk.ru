import { handleGetStaticProps } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeTeachers } from '@/data/routes'
import companyName from '@/data/companyName'
import { MeetYourTeachers } from '@/components/sections'

const TeachersPage = ({ programs, teachers }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Преподаватели | ${companyName}`}
        description={truncate(
          `${teachers[0]?.name}, ${teachers[0]?.achievements} | ${teachers[1]?.name}, ${teachers[1]?.achievements}`,
          120
        )}
        canonical={`${routesFront.root}${routeTeachers}`}
      />
      <MeetYourTeachers teachers={teachers} />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/teachers' })

export default TeachersPage
