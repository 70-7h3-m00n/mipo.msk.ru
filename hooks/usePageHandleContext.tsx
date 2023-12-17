import { TypeCategory } from '@/types/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

type TypeUseHandleContextProps = {
  programs?: any[] | null
  program?: any | null
  curProgramsType?: TypeCategory | null
  curProgramsStudyFieldSlug?: string | null
}

const useHandleContext = ({
  programs = null,
  program = null,
  curProgramsType = null,
  curProgramsStudyFieldSlug = null
}: TypeUseHandleContextProps) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } = useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType(curProgramsType)
    setCurProgramsStudyFieldSlug(curProgramsStudyFieldSlug)
  }, [programs, curProgramsType, curProgramsStudyFieldSlug])
}

export default useHandleContext
