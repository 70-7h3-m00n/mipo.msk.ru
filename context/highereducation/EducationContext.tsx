import { createContext, useContext } from 'react'

export const EducationContext = createContext({
  facultets: [],
  programs: [],
})

export const useEducation = () => useContext(EducationContext)

export const EducationProvider = ({
  children,
  facultets,
  programs,
}) => {
  return (
    <EducationContext.Provider value={{ facultets, programs }}>
      {children}
    </EducationContext.Provider>
  )
}
export default EducationContext
