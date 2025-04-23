import { createContext, useContext } from 'react'

export const ProgramContext = createContext({
  name: '',
  informationOfDirection: '',
  programm: [],
  timenprice: []
})

export const useHigherProgramContext = () => useContext(ProgramContext)

export const ProgramHigherContext = ({ children, program }) => {
  return (
    <ProgramContext.Provider value={program}>
      {children}
    </ProgramContext.Provider>
  )
}
export default ProgramHigherContext
