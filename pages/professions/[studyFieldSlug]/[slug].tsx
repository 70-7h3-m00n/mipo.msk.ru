import { PagesProgram } from '@/components/pages'
import { fetchPrograms, getProgram, fetchProgramsPaths } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const ProfessionPage = ({ programs, program, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [])

  return (
    <>
      <PagesProgram />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const programs = await fetchPrograms()
  const program = getProgram({
    data: programs,
    ofType: 'profession',
    slug
  })

  const studyFieldSlug = program.studyFieldSlug

  return {
    props: {
      programs,
      program,
      studyFieldSlug: studyFieldSlug || 'studyFieldSlug'
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const paths = await fetchProgramsPaths({ ofType: 'profession' })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionPage