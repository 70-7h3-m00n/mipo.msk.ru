import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM
} from '@/context/types'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'

const programsReducer = (state, action) => {
  switch (action.type) {
    case SET_PROGRAMS:
      const programs = action.payload

      const courses = filterProgramsByType({ programs, type: 'course' })

      const professions = filterProgramsByType({ programs, type: 'profession' })

      const mbas = filterProgramsByType({ programs, type: 'mba' })

      const newCourse = filterProgramsByType({ programs, type: 'newCourse' })

      const studyFields = getStudyFields(programs)

      const studyFieldsProfessions = getStudyFields(professions)

      const studyFieldsCourses = getStudyFields(courses)

      const studyFieldsMbas = getStudyFields(mbas)

      return {
        ...state,
        programs,
        courses,
        professions,
        mbas,
        newCourse,
        studyFields,
        studyFieldsProfessions,
        studyFieldsCourses,
        studyFieldsMbas
      }
    case SET_CUR_PROGRAMS_TYPE:
      return {
        ...state,
        curProgramsType: action.payload
      }
    case SET_CUR_PROGRAMS_STUDY_FIELD_SLUG:
      return {
        ...state,
        curProgramsStudyFieldSlug: action.payload
      }
    case SET_SEARCH_TERM:
      const searchTerm = action.payload.term === '' ? null : action.payload.term
      const filteredPrograms = searchTerm
        ? action.payload.programs.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : []
      return {
        ...state,
        searchTerm,
        filteredPrograms
      }
    default:
      return state
  }
}

export default programsReducer
