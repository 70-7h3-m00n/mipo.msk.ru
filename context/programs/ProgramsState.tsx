import { useReducer } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM
} from '@/context/types'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'

const ProgramsState = props => {
  const initialProgramsState =
    props?.pageProps?.programs && props?.pageProps?.programs?.length
      ? props?.pageProps?.programs
      : []

  const courses = filterProgramsByType({
    programs: initialProgramsState,
    type: 'course'
  })

  const professions = filterProgramsByType({
    programs: initialProgramsState,
    type: 'profession'
  })

  const mbas = filterProgramsByType({
    programs: initialProgramsState,
    type: 'mba'
  })

  const studyFields = getStudyFields(initialProgramsState)

  const studyFieldsProfessions = getStudyFields(professions)

  const studyFieldsCourses = getStudyFields(courses)

  const studyFieldsMbas = getStudyFields(mbas)

  const initialState = {
    programs: initialProgramsState,
    courses: courses && courses?.length ? courses : [],
    professions: professions && professions?.length ? professions : [],
    mbas: mbas && mbas?.length ? mbas : [],
    studyFields: studyFields && studyFields?.length ? studyFields : [],
    studyFieldsCourses:
      studyFieldsCourses && studyFieldsCourses?.length
        ? studyFieldsCourses
        : [],
    studyFieldsProfessions:
      studyFieldsProfessions && studyFieldsProfessions?.length
        ? studyFieldsProfessions
        : [],
    studyFieldsMbas:
      studyFieldsMbas && studyFieldsMbas?.length ? studyFieldsMbas : [],
    curProgramsType: props?.pageProps?.program?.category?.type || null,
    curProgramsStudyFieldSlug:
      props?.pageProps?.program?.study_field?.slug || null,
    searchTerm: null,
    filteredPrograms: []
  }

  console.log(initialState)

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    dispatch({ type: SET_PROGRAMS, payload: programs })
  }

  const setCurProgramsType = (programType: string | null) => {
    dispatch({ type: SET_CUR_PROGRAMS_TYPE, payload: programType })
  }

  const setCurProgramsStudyFieldSlug = (slug: string | null) => {
    dispatch({
      type: SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
      payload: slug
    })
  }

  const setSearchTerm = (programs: any[], term: string | null) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: { programs, term }
    })
  }

  return (
    <ProgramsContext.Provider
      value={{
        programs: state.programs,
        courses: state.courses,
        professions: state.professions,
        mbas: state.mbas,
        studyFields: state.studyFields,
        studyFieldsProfessions: state.studyFieldsProfessions,
        studyFieldsCourses: state.studyFieldsCourses,
        studyFieldsMbas: state.studyFieldsMbas,
        curProgramsType: state.curProgramsType,
        curProgramsStudyFieldSlug: state.curProgramsStudyFieldSlug,
        searchTerm: state.searchTerm,
        filteredPrograms: state.filteredPrograms,
        setSearchTerm,
        setPrograms,
        setCurProgramsType,
        setCurProgramsStudyFieldSlug
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
