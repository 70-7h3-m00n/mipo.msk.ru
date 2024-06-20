import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  mbas: [],
  newCourse: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  studyFieldsMbas: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  setSearchTerm: (programs: any, term: any) => {},
  setPrograms: (programs: any) => {},
  setCurProgramsType: (programType: any) => {},
  setCurProgramsStudyFieldSlug: (slug: any) => {}
})

export default programsContext
