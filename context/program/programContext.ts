import { createContext } from 'react'

const programContext = createContext({
  program: null,
  setProgram: (program: any) => {}
})

export default programContext
